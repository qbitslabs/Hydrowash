import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

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

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email to customer with PDF attachment
    console.log('Sending customer email to:', email);
    const customerEmail = await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
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
    const businessEmail = process.env.BUSINESS_EMAIL || 'metaliftsit@gmail.com';
    console.log('Sending business email to:', businessEmail);
    const notificationEmail = await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
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

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

app.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
  console.log('API endpoint: http://localhost:3001/api/send-brochure');
});
