// src/components/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';
import IconText from '../IconText';
import { FaPhoneAlt, FaMapMarkerAlt, FaMicroscope, FaRobot, FaHeartbeat } from 'react-icons/fa';
import heroImage from '/src/assets/doctor.jpg'; // Replace later with your actual image

const Home = () => {
  const navigate = useNavigate();

  const procedures = [
    { icon: <FaRobot />, title: 'Robotic-Assisted Surgery', desc: 'Precision and control for complex procedures.' },
    { icon: <FaMicroscope />, title: '3D Visualization', desc: 'Enhanced surgical accuracy with advanced imaging.' },
    { icon: <FaHeartbeat />, title: 'Minimally Invasive', desc: 'Faster recovery and reduced pain for patients.' },
  ];

  const testimonials = [
    { name: 'Emily M.', text: 'Dr. Sharma is skillful and very caring. I felt safe and confident throughout my treatment.' },
    { name: 'Michael R.', text: 'His expertise and compassion made all the difference in my recovery.' },
    { name: 'Sophia L.', text: 'The robotic surgery was smooth and effective. Highly recommend!' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20 text-white"
    >
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
          <p className="text-sky-300 font-medium tracking-wide">Advanced • Compassionate • Trusted</p>
          <h1 className="text-5xl font-bold glow-text tracking-tight leading-snug">
            Laparoscopic & Robotic Surgery with Precision
          </h1>
          <p className="text-slate-300 text-balance">
            Dr. Arya Sharma offers cutting-edge procedures with a patient-first approach. Explore our expertise and book your consultation today.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-sky-500 text-white glow-text hover:shadow-sky-500/40" onClick={() => navigate('/appointment')}>
              Book Appointment
            </Button>
            <Button className="bg-white text-sky-700 hover-scale">Explore Procedures</Button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <IconText icon={<FaPhoneAlt />}>+1 (555) 123-4567</IconText>
            <IconText icon={<FaMapMarkerAlt />}>123 Surgical Blvd, Wellness City</IconText>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-xl glass-card hover-scale cursor-pointer">
            <img
              src={heroImage}
              alt="Surgical hero placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Procedures Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold glow-text">Clinical Expertise & Technology</h2>
        <p className="text-slate-300 mt-2">Combining innovation with experience to deliver optimal outcomes.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {procedures.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
              className="p-6 rounded-xl glass-card shadow-md hover-scale cursor-pointer"
            >
              <div className="text-sky-300 text-2xl mb-2">{p.icon}</div>
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold glow-text">Testimonials</h2>
        <p className="text-slate-300 mt-2">Patient stories of trust and healing.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-4 rounded-xl glass-card shadow-md hover-scale cursor-pointer"
            >
              <p className="text-sm text-slate-200">"{t.text}"</p>
              <p className="mt-2 text-xs text-sky-300">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
