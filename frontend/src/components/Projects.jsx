import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'iConnect',
    description: 'iConnect is a social media platform enabling users to connect, share posts, like, and explore profiles seamlessly.',
    image: './images/iconnect.png',
    github: 'https://github.com/Priyanshu6055/iConnect.git',
    live: 'https://github.com/Priyanshu6055/iConnect.git'
  },
  {
    title: 'CodeColab',
    description: 'A collaborative coding platform enabling real-time synchronized coding sessions, making teamwork seamless.',
    image: './images/codecolab.png',
    github: 'https://github.com/Priyanshu6055/CodeCoLab.git',
    live: 'https://codecolab-08ca.onrender.com/'
  },
      {
    title: 'College Media',
    description: 'A social media website for College with chat feature and lots of more.',
    image: './images/collegeMedia.png',
    github: 'https://github.com/Priyanshu6055/College-Media',
    live: 'https://college-social-media-production.up.railway.app'
  },
  {
    title: 'Cart (Frontend)',
    description: 'A shopping cart project with real-time item addition functionality, built using HTML, Tailwind CSS, and JavaScript.',
    image: './images/cart.png',
    github: 'https://github.com/Priyanshu6055/Frontend_Cart.git',
    live: 'https://frontend-cart.vercel.app/'
  },
  {
    title: 'Pinterest (Frontend)',
    description: 'Pinterest\'s interface with a dynamic search feature, enhancing content discovery using DOM manipulation.',
    image: './images/pui.png',
    github: 'https://github.com/Priyanshu6055/Pinterest-FrontEnd.git',
    live: 'https://pinterest-front-end.vercel.app/'
  },
  {
    title: 'Temperature Converter',
    description: 'Converts values between Celsius, Fahrenheit, providing quick and accurate results.',
    image: './images/tempConver.png',
    github: 'https://github.com/Priyanshu6055/Bharat-Intern-Tank-2.git',
    live: 'https://oibsip-task-3-three.vercel.app/'
  },
  {
    title: 'Netflix UI',
    description: 'Replicates Netflix\'s user interface, showcasing a sleek design with features like dynamic content display.',
    image: './images/netflix.png',
    github: 'https://github.com/Priyanshu6055/Bharat-Intern-Tank-3.git',
    live: 'https://netflix6055.vercel.app/'
  },
  {
    title: 'GYM (Frontend)',
    description: 'A user-friendly interface showcasing membership plans, and dynamic sections for an engaging fitness experience.',
    image: './images/gym.png',
    github: 'https://github.com/Priyanshu6055/Gym_Landing-Page.git',
    live: 'https://gym-landing-page-tan.vercel.app/'
  },
  {
    title: 'Travel PR UI',
    description: 'The Traveling Website Landing Page UI features an engaging design with HTML, CSS for stunning visuals.',
    image: './images/landingpage.png',
    github: 'https://github.com/Priyanshu6055/OIBSIP.git',
    live: 'https://landing-page-teal-nine.vercel.app/'
  },

];

const Projects = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-700 mb-12 drop-shadow"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-blue-300 transition duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-blue-100/20 to-white/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none blur-sm"></div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 border border-blue-100 shadow"
            />

            <h2 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h2>
            <p className="text-sm text-blue-700 mb-4">{project.description}</p>

            <div className="flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full shadow hover:brightness-110 transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-1 rounded-full shadow hover:brightness-110 transition"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
