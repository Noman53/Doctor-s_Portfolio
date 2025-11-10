// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserMd } from 'react-icons/fa';
import Button from './Button';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Procedures', path: '/services' },
    { label: 'Appointment', path: '/appointment' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-2xl font-semibold glow-text">
          <FaUserMd className="text-sky-300" />
          <span>Dr. Arya Sharma</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative group text-sm font-medium hover:text-sky-300 transition ${
                location.pathname === path ? 'text-sky-400' : ''
              }`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button className="bg-sky-500 text-white hidden md:inline-flex" onClick={() => window.location.href='/appointment'}>
            Book Visit
          </Button>
          <button onClick={() => setOpen(p => !p)} className="md:hidden p-2 rounded-md hover-scale">
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-slate-900/90 px-6 py-4 border-t border-slate-800">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium hover:text-sky-300 hover-scale cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
