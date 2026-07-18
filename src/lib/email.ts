/**
 * Email notifications using SendGrid or similar
 */

import axios from 'axios';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send email notification
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;

  if (!apiKey) {
    console.warn('SendGrid API key not configured');
    // In development, just log the email
    console.log('Email would be sent to:', options.to);
    return true;
  }

  try {
    await axios.post('https://api.sendgrid.com/v3/mail/send', 
      {
        personalizations: [{ to: [{ email: options.to }] }],
        from: { email: 'noreply@villamak.com' },
        subject: options.subject,
        content: [{ type: 'text/html', value: options.html }],
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send booking confirmation email
 */
export async function sendBookingConfirmation(
  guestEmail: string,
  bookingDetails: {
    id: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
  }
): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #FF6B6B;">Booking Confirmation</h1>
      <p>Thank you for your booking at Villa Mak!</p>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2>Booking Details</h2>
        <p><strong>Booking ID:</strong> ${bookingDetails.id}</p>
        <p><strong>Check-in:</strong> ${bookingDetails.checkIn}</p>
        <p><strong>Check-out:</strong> ${bookingDetails.checkOut}</p>
        <p><strong>Number of Guests:</strong> ${bookingDetails.guests}</p>
        <p><strong>Total Price:</strong> €${bookingDetails.totalPrice}</p>
      </div>
      
      <p>If you have any questions, please contact us at info@villamak.com</p>
    </div>
  `;

  return sendEmail({
    to: guestEmail,
    subject: 'Villa Mak - Booking Confirmation',
    html,
  });
}
