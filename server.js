import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// API route for sending brochure
app.post('/api/send-brochure', async (req, res) => {
  console.log('API called');
  console.log('Form data received:', req.body);

  try {
    const { name, email, phone, service } = req.body;

    if (!name || !email || !phone) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const serviceName = service || 'General Inquiry';

    // Debug: log environment variables (without password)
    console.log('SMTP Configuration:');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS configured:', !!process.env.SMTP_PASS);

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP credentials');
      return res.status(500).json({ error: 'SMTP credentials not configured' });
    }

    // Create transporter with Titan SMTP
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.titan.email',
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Send email to customer with PDF attachment
    console.log('Sending customer email to:', email);
    const customerEmail = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your interest in HydroWash',
      text: `Dear ${name},

Thank you for your interest in HydroWash Car Wash & Detailing Studio.

We have received your inquiry for: ${serviceName}

Our team will contact you shortly at ${phone} to discuss your requirements.

Please find our service brochure attached for your reference.

Contact Us:
Address: Near Milk Bar Circle, Alwar, Rajasthan 301001
Phone: +91-98765-43210
Email: info@hydrowashcarwash.com

Best regards,
HydroWash Team`,
      attachments: [
        {
          filename: 'HydroWash-Brochure.pdf',
          path: './public/HydroWash-Brochure.pdf',
        },
      ],
    });
    console.log('Customer email sent:', customerEmail.messageId);

    // Send notification email to business
    const businessEmail = process.env.BUSINESS_EMAIL || process.env.SMTP_USER;
    console.log('Sending business email to:', businessEmail);
    const notificationEmail = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: businessEmail,
      subject: '🔥 New Lead: Brochure Request - HydroWash',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0B; padding: 0;">
          <div style="background: linear-gradient(135deg, #0A0A0B 0%, #1a1a1a 100%); padding: 40px 30px;">
            <h1 style="color: #FFD700; margin: 0 0 10px 0; font-size: 32px; font-weight: bold; text-align: center;">HYDROWASH</h1>
            <p style="color: #ffffff; margin: 0; font-size: 14px; text-align: center; opacity: 0.9;">New Lead Notification</p>
          </div>
          
          <div style="background: #0A0A0B; padding: 30px; border-top: 3px solid #FFD700;">
            <h2 style="color: #FFD700; margin: 0 0 20px 0; font-size: 24px;">🎉 New Lead Received!</h2>
            <p style="color: #ffffff; line-height: 1.8; margin: 0 0 20px 0;">A potential customer has requested the service brochure.</p>
            
            <div style="background: #1a1a1a; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #FFD700;">
              <h3 style="color: #FFD700; margin: 0 0 15px 0; font-size: 18px;">Lead Details:</h3>
              <p style="color: #ffffff; margin: 10px 0; font-size: 14px;"><strong style="color: #FFD700;">👤 Name:</strong> ${name}</p>
              <p style="color: #ffffff; margin: 10px 0; font-size: 14px;"><strong style="color: #FFD700;">📧 Email:</strong> ${email}</p>
              <p style="color: #ffffff; margin: 10px 0; font-size: 14px;"><strong style="color: #FFD700;">📞 Phone:</strong> ${phone}</p>
              <p style="color: #ffffff; margin: 10px 0; font-size: 14px;"><strong style="color: #FFD700;">🚗 Service:</strong> ${serviceName}</p>
              <p style="color: #999; margin: 10px 0; font-size: 13px;"><strong style="color: #FFD700;">⏰ Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #1a3a1a; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #28a745;">
              <p style="color: #28a745; margin: 0; font-weight: bold; font-size: 14px;">✅ Action Required: Contact this lead within 24 hours</p>
            </div>
            
            <p style="color: #ffffff; line-height: 1.8; margin: 0 0 30px 0;">The brochure has been automatically sent to the customer. Follow up to discuss their requirements and close the deal!</p>
          </div>
          
          <div style="background: #0A0A0B; padding: 20px; text-align: center; border-top: 1px solid #333;">
            <p style="color: #666; font-size: 12px; margin: 0;">© 2024 HydroWash Car Wash & Detailing Studio. All rights reserved.</p>
          </div>
        </div>
      `,
    });
    console.log('Business email sent:', notificationEmail.messageId);

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        const sheetsResponse = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            service: serviceName,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!sheetsResponse.ok) {
          console.error(
            'Google Sheets logging failed:',
            sheetsResponse.status,
            await sheetsResponse.text(),
          );
        } else {
          console.log('Lead logged to Google Sheets');
        }
      } catch (sheetsError) {
        console.error('Google Sheets logging error:', sheetsError);
      }
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

// API route for Instagram posts
app.get('/api/instagram-posts', async (req, res) => {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!accessToken) {
      console.warn('Instagram access token not configured, returning mock data');
      return res.json({
        data: [
          {
            id: '1',
            type: 'reel',
            thumbnail: '/instagram-placeholder-1.jpg',
            likes: 234,
            comments: 45,
            caption: 'Premium ceramic coating transformation ✨',
          },
          {
            id: '2',
            type: 'post',
            thumbnail: '/instagram-placeholder-2.jpg',
            likes: 189,
            comments: 32,
            caption: 'Before & After: Deep interior detailing',
          },
          {
            id: '3',
            type: 'reel',
            thumbnail: '/instagram-placeholder-3.jpg',
            likes: 312,
            comments: 67,
            caption: 'Paint correction magic 🎨',
          },
          {
            id: '4',
            type: 'post',
            thumbnail: '/instagram-placeholder-4.jpg',
            likes: 156,
            comments: 28,
            caption: 'Engine bay detailing excellence',
          },
        ],
        source: 'mock'
      });
    }

    // First test if token is valid with a simple user info call
    console.log('Testing Instagram access token...');
    const testResponse = await fetch(
      `https://graph.instagram.com/me?access_token=${accessToken}`
    );
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.error('Instagram token validation failed:', errorText);
      console.warn('Token appears invalid, returning mock data');
      return res.json({
        data: [
          {
            id: '1',
            type: 'reel',
            thumbnail: '/instagram-placeholder-1.jpg',
            likes: 234,
            comments: 45,
            caption: 'Premium ceramic coating transformation ✨',
          },
          {
            id: '2',
            type: 'post',
            thumbnail: '/instagram-placeholder-2.jpg',
            likes: 189,
            comments: 32,
            caption: 'Before & After: Deep interior detailing',
          },
          {
            id: '3',
            type: 'reel',
            thumbnail: '/instagram-placeholder-3.jpg',
            likes: 312,
            comments: 67,
            caption: 'Paint correction magic 🎨',
          },
          {
            id: '4',
            type: 'post',
            thumbnail: '/instagram-placeholder-4.jpg',
            likes: 156,
            comments: 28,
            caption: 'Engine bay detailing excellence',
          },
        ],
        source: 'mock'
      });
    }

    const userData = await testResponse.json();
    console.log('Token valid for user:', userData.username);

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count&limit=8&access_token=${accessToken}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Instagram API error details:', errorText);
      throw new Error(`Instagram API error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    
    const posts = data.data?.map((item) => ({
      id: item.id,
      type: item.media_type === 'VIDEO' ? 'reel' : 'post',
      thumbnail: item.thumbnail_url || item.media_url,
      likes: item.like_count || 0,
      comments: item.comments_count || 0,
      caption: item.caption || '',
      permalink: item.permalink,
    })) || [];

    res.json({ data: posts, source: 'api' });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    res.status(500).json({ error: 'Failed to fetch Instagram posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
  console.log('API endpoint: http://localhost:3001/api/send-brochure');
  console.log('Instagram endpoint: http://localhost:3001/api/instagram-posts');
});
