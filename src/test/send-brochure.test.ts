/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';
import handler from '../../api/send-brochure';

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn().mockImplementation(() => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: 'mock-message-id' }),
    })),
  },
  createTransport: vi.fn().mockImplementation(() => ({
    sendMail: vi.fn().mockResolvedValue({ messageId: 'mock-message-id' }),
  })),
}));

describe('send-brochure API handler', () => {
  it('should successfully read brochure and trigger nodemailer email sending', async () => {
    // Setup env variables
    process.env.GMAIL_EMAIL = 'test@gmail.com';
    process.env.GMAIL_APP_PASSWORD = 'test_app_password';
    process.env.BUSINESS_EMAIL = 'business@example.com';

    const req = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
        service: 'Ultra Ceramic Coating',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(200);
    expect(jsonVal).toEqual({ success: true });
  });

  it('should return 400 when name is missing', async () => {
    // Setup env variables
    process.env.GMAIL_EMAIL = 'test@gmail.com';
    process.env.GMAIL_APP_PASSWORD = 'test_app_password';

    const req = {
      method: 'POST',
      body: {
        email: 'test@example.com',
        phone: '9876543210',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(400);
    expect(jsonVal.error).toContain('Missing required fields');
  });

  it('should return 500 when GMAIL_EMAIL or GMAIL_APP_PASSWORD are not defined', async () => {
    const originalGmail = process.env.GMAIL_EMAIL;
    const originalPassword = process.env.GMAIL_APP_PASSWORD;
    delete process.env.GMAIL_EMAIL;
    delete process.env.GMAIL_APP_PASSWORD;

    const req = {
      method: 'POST',
      body: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
      },
    };

    let statusVal = 0;
    let jsonVal: any = null;

    const res = {
      status: (code: number) => {
        statusVal = code;
        return res;
      },
      json: (data: any) => {
        jsonVal = data;
        return res;
      },
    };

    await handler(req, res);

    expect(statusVal).toBe(500);
    expect(jsonVal.error).toContain('Email service is not configured');

    process.env.GMAIL_EMAIL = originalGmail;
    process.env.GMAIL_APP_PASSWORD = originalPassword;
  });
});
