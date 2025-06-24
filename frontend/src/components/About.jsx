import React from 'react';

const skillLogos = {
  Reactjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  Expressjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  Laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'C, C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  Postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Content Creation': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/substack.svg',
};

const About = () => {
  return (
    <section
      id="aboutContainer"
      className="bg-gradient-to-b from-blue-100 to-white py-8 px-4 sm:px-8 text-blue-900 text-center"
    >
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6 text-center drop-shadow-md">
          About Me
        </h1>
        <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          Hello! I'm <strong>Priyanshu Raj</strong>, a passionate web developer and tech enthusiast from India.
          <br /><br />
          Currently working as a<strong> Full Stack Web Developmer.</strong>Completed a 6-month internship as a Full Stack Web Developer during my academics.
          <br /><br />
          I’m dedicated to writing effective code and constantly improving my skills. Beyond coding, I enjoy
          content creation and experimenting in the kitchen.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-1 mt-6 sm:mt-8">Future Learning Goals</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base">
          Focused on mastering the Full stack to build efficient full-stack web applications and improve my
          problem-solving skills across both front-end and back-end development.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
          {Object.entries(skillLogos).map(([skillName, logoSrc], index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col items-center justify-center p-2 rounded-xl
                         bg-gradient-to-br from-white via-blue-50 to-blue-100
                         shadow-md hover:shadow-lg border border-blue-200
                         transition-all duration-300 transform hover:-translate-y-1 hover:scale-105
                         hover:border-blue-400 cursor-pointer"
            >
              <img
                src={logoSrc}
                alt={`${skillName} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 object-contain"
              />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-blue-900 text-center">
                {skillName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
