import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setResponseMessage('');

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await res.text();

      if (res.ok) {
        setResponseMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(`❌ Error: ${text}`);
      }
    } catch (err) {
      setResponseMessage('❌ Network error. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6"
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-lg animate-fade-in border border-blue-200">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center drop-shadow-sm">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-blue-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-blue-500 shadow-md hover:shadow-lg transition duration-300"
          >
            {sending ? 'Sending...' : '✉️ Send Message'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-blue-700">{responseMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
