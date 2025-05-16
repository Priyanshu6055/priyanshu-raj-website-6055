import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer.", "Priyanshu.", "Developer.", "Creator."],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-blue-900 relative px-6 py-4 overflow-hidden">
      {/* Particle-like shimmer background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-blue-100/30 to-transparent animate-pulse pointer-events-none z-0" />

      {/* Top bar: Logo + Navbar */}
      <div className="flex justify-between items-center relative z-10">
        <motion.h1
          className="text-xl font-bold text-blue-700 drop-shadow bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span ref={el}></span>
        </motion.h1>

        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-blue-600 transition">HOME</a>
          <a href="#aboutContainer" className="hover:text-blue-600 transition">ABOUT</a>
          <Link to="/projects" className="hover:text-blue-600 transition">PROJECTS</Link>
          <a href="#contact" className="hover:text-blue-600 transition">CONTACT</a>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          <div className={`w-6 h-1 bg-blue-700 my-1 rounded transition-transform duration-300 ${menuVisible ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-1 bg-blue-700 my-1 rounded transition-opacity duration-300 ${menuVisible ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-1 bg-blue-700 my-1 rounded transition-transform duration-300 ${menuVisible ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </div>

      {/* Mobile Nav */}
      <ul className={`md:hidden mt-4 bg-white/90 rounded-lg shadow-lg p-4 space-y-3 text-blue-800 z-10 relative ${menuVisible ? 'block' : 'hidden'}`}>
        <li><a href="#" onClick={toggleMenu}>Home</a></li>
        <li><a href="#aboutContainer" onClick={toggleMenu}>About</a></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>

      {/* Hero Text */}
      <motion.div
        className="header-text mt-32 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow">
          Hello, <br />
          I'm <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Priyanshu</span> Raj
        </h1>
        <h6 className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-blue-700">
          Currently I'm Pursuing My B.E in CSE From <span className="font-semibold text-blue-500">Rabindranath Tagore University</span> (Bhopal).
        </h6>

        {/* Buttons container */}
<div className="mt-6 flex justify-center gap-4">
  <motion.a
    target="_blank"
    rel="noopener noreferrer"
    href="https://drive.google.com/drive/folders/1Oz4J3It51dQuR84oxfewj2Ht0e8Fn0Pz?usp=drive_link"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <button className="
      px-6 py-2 rounded-full 
      bg-gradient-to-r from-blue-500 to-cyan-600 
      text-white 
      shadow-lg 
      border-2 border-transparent
      hover:border-blue-700
      transition-none
      flex items-center
    ">
      <i className="fa fa-download mr-2"></i> Resume
    </button>
  </motion.a>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      px-6 py-2 rounded-full 
      border-2 border-blue-700 
      text-blue-700 
      bg-transparent
      hover:border-blue-700
      transition-none
    "
  >
    Hire Me
  </motion.button>
</div>




      </motion.div>
    </header>
  );
};

export default Header;
