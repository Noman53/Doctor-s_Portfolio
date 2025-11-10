// src/components/pages/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'What procedures do you specialize in?',
    a: 'Dr. Sharma specializes in laparoscopic and robotic surgeries including gallbladder, colorectal, and bariatric procedures.',
  },
  {
    q: 'How do I prepare for surgery?',
    a: 'You’ll receive detailed instructions during your consultation, including fasting and medication guidelines.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes, we accept most major insurance providers. Please contact us to confirm your coverage.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h2 className="text-3xl font-bold glow-text">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-slate-700 rounded-xl p-4 bg-slate-900 shadow hover-scale cursor-pointer"
          >
            <button className="flex justify-between items-center w-full text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className="font-semibold">{item.q}</span>
              <FaChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && <p className="mt-2 text-slate-300">{item.a}</p>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
