import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 檢查留言內容是否為空
    if (!formData.message.trim()) {
      alert('留言內容不能為空！');
      return;
    }

    // 發送 API 請求
    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then((data) => {
        console.log('Success:', data);
        // 清空表單並顯示成功訊息
        setSuccessMessage('感謝您的留言！我們已收到您的訊息。');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        alert('Message sent successfully!');
      })

      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });

  };

  return (

    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Send me a message</h1>
        <p className="contact-description">
          If you have any questions, feel free to reach out using the form below:
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="input-group">
          <i className="fas fa-user input-icon"></i>
          <input
            type="text"
            name="name"
            placeholder="Your Name (Optional)"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <i className="fas fa-envelope input-icon"></i>
          <input
            type="email"
            name="email"
            placeholder="Your Email (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <i className="fas fa-tag input-icon"></i>
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            placeholder="Please feel free to share any thoughts or suggestions you may have. I would be delighted to hear from you."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="contact-submit">
          <i className="fas fa-paper-plane"></i> Submit
        </button>

      </form>

    </div>
  );
};

export default Contact;
