import React from 'react';

const About = () => {
  return (
    <section
      id="aboutContainer"
      className="bg-gradient-to-b from-blue-100 to-white py-12 px-6 sm:px-12 text-blue-900 text-center"
    >
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center drop-shadow-md">About Me</h1>
        <p className="mb-6 leading-relaxed text-lg">
          Hello! I'm <strong>Priyanshu Raj</strong>, a passionate web developer and tech enthusiast from India.
          <br /><br />
          I've built a strong foundation in <strong>Full stack</strong> development.
          <br /><br />
          I'm dedicated to writing effective code and constantly improving my skills. My passion for technology
          keeps me updated on trends, and my discipline ensures I deliver quality work. Beyond coding, I'm a
          content creator who enjoys sharing knowledge and insights, and I love experimenting in the kitchen.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2 mt-8">Future Learning Goals</h2>
        <p className="mb-6 text-lg">
          Focused on mastering the Full stack to build efficient full-stack web applications and enhance my
          problem-solving skills across both front-end and back-end development.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base font-medium text-blue-800">
          {[
            "Reactjs", "Nodejs", "Expressjs", "Java", "Laravel", "SQL",
            "C, C++", "Postman", "Git", "GitHub", "Content Creation"
          ].map((skill, index) => (
            <button
              key={index}
              className="relative px-6 py-3 rounded-xl 
        bg-gradient-to-br from-white via-blue-100 to-blue-200
        text-blue-900 shadow-md hover:shadow-xl border border-blue-300
        transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
        overflow-hidden font-semibold tracking-wide backdrop-blur-sm
        hover:border-blue-500 hover:text-indigo-800 hover:brightness-110"
            >
              <span className="relative z-10">{skill}</span>

              {/* Shimmer layer */}
              <span
                className="absolute top-0 left-[-75%] w-[200%] h-full 
          bg-gradient-to-r from-transparent via-white/60 to-transparent
          opacity-0 hover:opacity-100 transition-opacity duration-700
          animate-shimmer pointer-events-none"
              ></span>

              {/* Glow ring */}
              <span
                className="absolute inset-0 rounded-xl border border-blue-300 
          opacity-0 hover:opacity-100 transition-all duration-500 
          shadow-[0_0_20px_rgba(100,149,237,0.4)] pointer-events-none"
              ></span>
            </button>
          ))}
        </div>



      </div>
    </section>
  );
};

export default About;
