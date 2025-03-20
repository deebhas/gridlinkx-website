import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

export async function sendInvestorNotification(submission: {
  name: string;
  email: string;
  organization?: string | null;
  message?: string | null;
}) {
  const emailBody = `
New Investor Contact Form Submission

Name: ${submission.name}
Email: ${submission.email}
Organization: ${submission.organization || 'Not provided'}
Message: ${submission.message || 'No message provided'}

This is an automated notification from your website contact form.
`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: process.env.SMTP_USERNAME, // Send to the same email
      subject: 'New Investor Contact Form Submission',
      text: emailBody,
    });
    console.log('Investor notification email sent successfully');
  } catch (error) {
    console.error('Error sending investor notification email:', error);
    // Don't throw the error to prevent breaking the form submission
  }
}
