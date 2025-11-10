// src/components/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaSyringe, FaLungs, FaUserShield, FaWeight } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaStethoscope />, title: 'Gallbladder Surgery', desc: 'Laparoscopic cholecystectomy for safe and fast recovery.' },
    { icon: <FaLungs />, title: 'Colon & Rectal Surgery', desc: 'Minimally invasive colorectal resections with precision.' },
    { icon: <FaWeight />, title: 'Bariatric Surgery', desc: 'Gastric sleeve and bypass for weight loss and metabolic health.' },
    { icon: <FaUserShield />, title: 'Robotic Surgery', desc: 'Advanced technology for enhanced control and outcomes.' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">Clinical Procedures</h2>
      <p className="text-slate-300 mt-2">Expertise in minimally invasive and robotic techniques.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-xl glass-card shadow-md hover-scale cursor-pointer">
            <div className="text-sky-300 text-2xl mb-2">{s.icon}</div>
            <h4 className="font-semibold text-lg">{s.title}</h4>
            <p className="text-slate-300 mt-2 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
