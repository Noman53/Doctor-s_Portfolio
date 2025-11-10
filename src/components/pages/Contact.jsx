// src/components/pages/Contact.jsx
import React from 'react';
import Button from '../Button';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaLocationArrow,
} from 'react-icons/fa';

// EmailJS configuration
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id_contact';
const PUBLIC_KEY = 'your_public_key';

const Contact = () => {
  // Form state
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  // Handle input changes
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Handle form submission
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

    // Send email via EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => setSent(true))
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Error sending message. Check console.');
      });
  };

  // Handle "Get Directions" button click
  const handleDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const destination = encodeURIComponent(
            'IBN Sina Specialized Hospital, Dhaka'
          );
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
          window.open(url, '_blank');
        },
        () => {
          alert('Location access denied. Opening map without origin.');
          window.open(
            'https://www.google.com/maps/dir/?api=1&destination=IBN+Sina+Specialized+Hospital,+Dhaka',
            '_blank'
          );
        }
      );
    } else {
      alert('Geolocation not supported. Opening map without origin.');
      window.open(
        'https://www.google.com/maps/dir/?api=1&destination=IBN+Sina+Specialized+Hospital,+Dhaka',
        '_blank'
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-20 text-white"
    >
      {/* Page Heading */}
      <h2 className="text-3xl font-bold glow-text">Contact</h2>

      {/* Grid Layout: Info + Form */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Contact Info + Map */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-4"
        >
          {/* Contact Details */}
          <p className="flex items-center gap-2 text-sky-300 cursor-pointer hover-scale">
            <FaMapMarkerAlt /> IBN Sina Specialized Hospital, Dhaka
          </p>
          <p className="flex items-center gap-2 text-sky-300 cursor-pointer hover-scale">
            <FaPhoneAlt /> +1 (555) 123-4567
          </p>
          <p className="flex items-center gap-2 text-sky-300 cursor-pointer hover-scale">
            <FaEnvelope /> drsharma@laparoscopy.com
          </p>

          {/* Custom Marker Label */}
          <div className="flex items-center gap-2 mt-2 text-sm text-sky-400">
            <FaMapMarkerAlt className="text-xl glow-text" />
            <span className="font-medium">Clinic Location</span>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-2 w-full h-56 rounded-xl overflow-hidden shadow-md glass-card">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58429.42401570758!2d90.38720530000003!3d23.753119999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf51e7aee4ff%3A0x21c88cabfebf5243!2sIBN%20Sina%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1762755540091!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="mt-4">
            <Button
              className="bg-sky-600 text-white glow-text hover:shadow-sky-500/40 cursor-pointer"
              onClick={handleDirections}
            >
              <FaLocationArrow className="mr-2" /> Get Directions
            </Button>
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h4 className="font-semibold text-sky-300">Send a Message</h4>

          {/* Success Message */}
          {sent ? (
            <div className="mt-4 p-4 bg-green-600/20 border border-green-400 rounded">
              ✅ Thanks — we'll get back to you soon.
            </div>
          ) : (
            // Contact Form
            <form
              className="mt-4 space-y-3 glass-card p-6 rounded-xl shadow-md"
              onSubmit={handleSubmit}
            >
              {/* Name Field */}
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-sky-300" />
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700 cursor-pointer"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-sky-300" />
                <input
                  required
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700 cursor-pointer"
                />
              </div>

              {/* Message Field */}
              <textarea
                required
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700 h-36 cursor-pointer"
              />

              {/* Submit Button */}
              <div>
                <Button className="bg-sky-500 text-white glow-text cursor-pointer">
                  <FaPaperPlane /> Send Message
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
