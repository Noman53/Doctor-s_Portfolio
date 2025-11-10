// src/components/layouts/RootLayout.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import { motion } from 'framer-motion';

const RootLayout = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Helmet>
        <title>Dr. Arya Sharma — Laparoscopic Surgeon</title>
        <meta name="description" content="Advanced surgical care with compassion and precision." />
        <meta property="og:title" content="Dr. Arya Sharma" />
        <meta property="og:description" content="Expert in minimally invasive procedures and robotic surgery." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </motion.div>
  );
};

export default RootLayout;
