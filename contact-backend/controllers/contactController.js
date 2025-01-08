const nodemailer = require('nodemailer');

exports.handleContactForm = (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: email || 'no-reply@yourdomain.com', // 用戶提供的 Email
        to: 'wen114teng@gmail.com', // 收件人
        subject: subject || 'No Subject', // 避免 subject 為空
        text: `Name: ${name || 'Anonymous'}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });

    // 模擬處理聯絡表單邏輯
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
};
