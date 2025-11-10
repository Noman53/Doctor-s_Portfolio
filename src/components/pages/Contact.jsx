// src/components/pages/Contact.jsx
import React from 'react';
import Button from '../Button';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id_contact';
const PUBLIC_KEY = 'your_public_key';

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please complete the form.');
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => setSent(true))
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Error sending message. Check console.');
      });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">Contact</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Contact Info + Map */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4">
          <p className="flex items-center gap-2 text-sky-300"><FaMapMarkerAlt /> 123 Surgical Blvd, Wellness City</p>
          <p className="flex items-center gap-2 text-sky-300"><FaPhoneAlt /> +1 (555) 123-4567</p>
          <p className="flex items-center gap-2 text-sky-300"><FaEnvelope /> drsharma@laparoscopy.com</p>

          <div className="mt-4 w-full h-56 rounded-xl overflow-hidden shadow-md glass-card">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with actual embed URL
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h4 className="font-semibold text-sky-300">Send a Message</h4>
          {sent ? (
            <div className="mt-4 p-4 bg-green-600/20 border border-green-400 rounded">✅ Thanks — we'll get back to you soon.</div>
          ) : (
            <form className="mt-4 space-y-3 glass-card p-6 rounded-xl shadow-md" onSubmit={handleSubmit}>
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-sky-300" />
                <input required name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-sky-300" />
                <input required name="email" placeholder="Your email" value={form.email} onChange={handleChange} className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
              </div>
              <textarea required name="message" placeholder="Your message" value={form.message} onChange={handleChange} className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700 h-36" />
              <div>
                <Button className="bg-sky-500 text-white glow-text"><FaPaperPlane /> Send Message</Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
