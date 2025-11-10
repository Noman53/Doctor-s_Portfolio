// src/components/pages/Appointment.jsx
import React from 'react';
import Button from '../Button';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

const Appointment = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      alert('Please fill all required fields.');
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      notes: form.notes,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Error sending request. Check console.');
      });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">Book an Appointment</h2>
      {submitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-6 bg-green-600/20 border border-green-400 rounded">
          ✅ Thank you! Your appointment request has been received. We'll contact you soon.
        </motion.div>
      ) : (
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-4 glass-card p-6 rounded-xl shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-sky-300" />
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-sky-300" />
              <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <FaPhoneAlt className="absolute top-3 left-3 text-sky-300" />
              <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute top-3 left-3 text-sky-300" />
              <input required name="date" type="date" value={form.date} onChange={handleChange} className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
            </div>
          </div>

          <div className="relative">
            <FaClock className="absolute top-3 left-3 text-sky-300" />
            <input required name="time" type="time" value={form.time} onChange={handleChange} className="pl-10 p-3 w-full rounded bg-slate-900 text-white border border-slate-700" />
          </div>

          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (symptoms or questions)" className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700 h-32" />

          <div className="flex items-center gap-3">
            <Button className="bg-sky-500 text-white glow-text" type="submit">Request Appointment</Button>
            <Button className="bg-white text-sky-700 hover-scale" onClick={() => setForm({ name: '', email: '', phone: '', date: '', time: '', notes: '' })}>Reset</Button>
          </div>
        </motion.form>
      )}
      <div className="mt-8 text-sm text-slate-300">
        📞 For urgent appointments, call +1 (555) 123-4567. For non-urgent requests, use the form above.
      </div>
    </motion.div>
  );
};

export default Appointment;
