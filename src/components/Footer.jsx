// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-sky-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold glow-text">Dr. Arya Sharma</h3>
          <p className="mt-2 text-sm text-slate-300">Laparoscopic Surgeon • Robotic Surgery • Compassionate Care</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com/drsharma" className="p-2 bg-slate-800 rounded-full hover:bg-sky-600 hover-scale cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com/in/drsharma" className="p-2 bg-slate-800 rounded-full hover:bg-sky-600 hover-scale cursor-pointer">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/15551234567" className="p-2 bg-slate-800 rounded-full hover:bg-sky-600 hover-scale cursor-pointer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sky-300">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sky-400 hover-scale cursor-pointer">Home</Link></li>
            <li><Link to="/services" className="hover:text-sky-400 hover-scale cursor-pointer">Procedures</Link></li>
            <li><Link to="/about" className="hover:text-sky-400 hover-scale cursor-pointer">About</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400 hover-scale cursor-pointer">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-sky-400 hover-scale cursor-pointer">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sky-300">Contact</h4>
          <p className="mt-2 text-sm flex items-center gap-2"><FaMapMarkerAlt /> 123 Surgical Blvd, Wellness City</p>
          <p className="text-sm flex items-center gap-2 mt-2"><FaPhoneAlt /> +1 (555) 123-4567</p>
          <p className="text-sm flex items-center gap-2 mt-2"><FaEnvelope /> drsharma@laparoscopy.com</p>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} Dr. Arya Sharma — Laparoscopic Surgeon
      </div>
    </footer>
  );
};

export default Footer;
