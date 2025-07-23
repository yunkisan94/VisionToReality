import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  // Create transporter using Gmail SMTP
  // For production, you should use environment variables for credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your Gmail
      pass: process.env.EMAIL_PASS || 'your-app-password'     // Replace with Gmail App Password
    }
  });

  const mailOptions = {
    from: data.email,
    to: 'yunkisan94@naver.com',
    subject: `포트폴리오 문의: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          포트폴리오 사이트에서 새로운 문의가 도착했습니다
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">연락처 정보</h3>
          <p><strong>이름:</strong> ${data.name}</p>
          <p><strong>이메일:</strong> ${data.email}</p>
          <p><strong>제목:</strong> ${data.subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
          <h3 style="color: #495057; margin-top: 0;">메시지 내용</h3>
          <div style="white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9f7ff; border-radius: 8px;">
          <p style="margin: 0; color: #0066cc; font-size: 14px;">
            이 메시지는 포트폴리오 웹사이트(vision-to-reality.replit.app)의 연락 폼에서 전송되었습니다.
          </p>
        </div>
      </div>
    `,
    replyTo: data.email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error: ', error);
    throw new Error('이메일 전송에 실패했습니다.');
  }
}