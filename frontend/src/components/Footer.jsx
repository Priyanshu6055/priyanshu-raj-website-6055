import React from "react";
import { motion } from 'framer-motion';


// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 text-blue-800 py-8 px-6 mt-2 shadow-inner"
    >
      <div className="footer-container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo with image */}
        <div className="flex items-center">

    <motion.img
      src="/images/logo.png"
      alt="Logo"
      style={{
        background_color: 'blue',
        width: '150px',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '8px', // optional rounded edges
        filter: 'drop-shadow(0 0 0px rgba(0, 191, 255, 0))',
        transition: 'filter 0.3s ease-in-out',
      }}
      initial={{ scale: 1, filter: 'drop-shadow(0 0 0px rgba(0, 191, 255, 0))' }}
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 0 8px rgba(0, 191, 255, 0.7)) drop-shadow(0 0 15px rgba(0, 191, 255, 0.5))',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    />

        </div>

        {/* Social Links */}
        <div className="social-links flex space-x-6 my-4 md:my-0 text-2xl">
          <a
            href="https://www.linkedin.com/in/priyanshu-raj-9782aa241/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Priyanshu6055"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-transform transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/priyanshu_6055"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/priyanshu.raj.6055"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-125"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-blue-700 text-center md:text-right">
          &copy; 2023 Priyanshu Raj | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
