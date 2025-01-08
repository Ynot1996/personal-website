exports.handleContactForm = (req, res) => {
    const { name, email, subject, message } = req.body;

    // 模擬處理聯絡表單邏輯
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    res.status(200).json({ message: 'Form submission received!' });
};
