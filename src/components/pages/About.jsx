// src/components/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaAward } from 'react-icons/fa';
import portrait from '/src/assets/surgeon.jpg'; // ✅ Imported placeholder image

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">About Dr. Arya Sharma</h2>
      <p className="mt-4 text-slate-300 text-balance">Board-certified laparoscopic surgeon with over a decade of experience in minimally invasive and robotic procedures.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h4 className="font-semibold text-sky-300">Qualifications</h4>
          <ul className="mt-4 space-y-3 text-slate-300 text-sm">
            <li className="flex items-center gap-2 hover-scale cursor-pointer"><FaGraduationCap /> MD — Prestigious Medical School</li>
            <li className="flex items-center gap-2 hover-scale cursor-pointer"><FaAward /> Board Certified in General Surgery</li>
            <li className="flex items-center gap-2 hover-scale cursor-pointer"><FaUserMd /> 10+ years of clinical experience</li>
          </ul>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="w-full h-56 rounded-xl overflow-hidden shadow-md glass-card hover-scale cursor-pointer">
            <img
              src={portrait}
              alt="Dr. Arya Sharma portrait placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-12">
        <h4 className="font-semibold text-sky-300">Mission</h4>
        <p className="mt-2 text-slate-300 text-balance">
          Delivering compassionate, evidence-based surgical care with precision and integrity.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;