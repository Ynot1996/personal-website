const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) => {
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

    // send to wen114teng@gmail.com from no-reply
    const mailOptions = {
        from: '"文騰" <no-reply@ynot1996.github.io>',
        to: 'wen114teng@gmail.com',
        subject: subject || 'No Subject',
        text: `Name: ${name || 'Anonymous'}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent to admin: ' + info.response);

        // 發送確認信給用戶 (如果使用者有提供email)
        if (email) {
            const userMailOptions = {
                from: '"文騰" <no-reply@ynot1996.github.io>',
                to: email,
                subject: '已收留言的訊息！',
                text: `您好 ${name || ''}，\n\n您的留言內容：\n${message}\n\n\n感謝您與我聯絡！我們已經收到您的留言，將會盡快回覆。\n\n此為系統自動發送的郵件，請勿回覆。`
            };

            let userInfo = await transporter.sendMail(userMailOptions);
            console.log('Confirmation email sent to user: ' + userInfo.response);
        }

        res.status(200).json({ message: 'Message received and email sent!' });

    } catch (error) {
        console.error('Error sending email:', error);
        if (error.code === 'EAUTH') {
            res.status(500).json({ message: 'Authentication failed. Check your email and password.' });
        } else {
            res.status(500).json({ message: 'Failed to send email.' });
        }
    }

    // backend console log (show in render.com)
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
};
