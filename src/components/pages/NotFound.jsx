// src/components/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex flex-col items-center justify-center px-6 text-center text-white">
      <h1 className="text-6xl font-bold text-sky-500">404</h1>
      <p className="mt-4 text-xl text-slate-300">Oops! The page you're looking for doesn't exist.</p>
      <Button className="mt-6 bg-sky-500 text-white" onClick={() => navigate('/')}>Go Home</Button>
    </motion.div>
  );
};

export default NotFound;
