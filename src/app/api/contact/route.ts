import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER || 'ah770643@gmail.com';
    const pass = process.env.SMTP_PASSWORD || 'tzhixkiirkcpahrq';

    if (!host || !user || !pass) {
      throw new Error('SMTP configuration missing. Check your environment variables.');
    }

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
      pool: true, // Use connection pool
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000, // 1 second between messages
      rateLimit: 5, // Max 5 emails per second
    });
  }
  return transporter;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get transporter instance
    const mailTransporter = getTransporter();
    
    // Get sender email from SMTP config
    const senderEmail = process.env.SMTP_USER || 'ah770643@gmail.com';

    // Email content to be sent to the business owner
    const mailOptions = {
      from: `"${name}" <${senderEmail}>`,
      to: senderEmail, // Send to the same email address
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            h2 { color: #2563eb; margin-top: 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; margin-bottom: 5px; color: #555; }
            .value { background: #f9fafb; padding: 10px; border-radius: 4px; }
            hr { border: none; border-top: 1px solid #eee; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>📧 New Contact Form Submission</h2>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            
            ${phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            
            <hr />
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
    };

    // Send email to business owner
    await mailTransporter.sendMail(mailOptions);

    // Auto-reply to the customer
    const autoReplyOptions = {
      from: `"SupportPro" <${senderEmail}>`,
      to: email,
      subject: 'Thank you for contacting SupportPro!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #2563eb; }
            .message-box { background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Thank You for Reaching Out!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>Here's what you sent us:</p>
            <div class="message-box">
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <hr />
            <p>Best regards,<br/><strong>SupportPro Team</strong></p>
            <p style="font-size: 12px; color: #888;">This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </body>
        </html>
      `,
      text: `
        Thank You for Reaching Out!
        
        Hi ${name},
        
        We've received your message and will get back to you within 24 hours.
        
        Here's what you sent us:
        
        Message:
        ${message}
        
        Best regards,
        SupportPro Team
        
        This is an automated confirmation. Please do not reply to this email.
      `,
    };

    await mailTransporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}