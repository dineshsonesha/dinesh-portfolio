import React from 'react';
import { motion } from 'framer-motion';
import headerProfile from '../assets/profilephoto_2.png';

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-25 pb-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center isolation-isolate">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-2 z-0"
        >
          <div className="relative max-w-[450px] mx-auto">
            <div className="absolute -inset-4 bg-[#ec994b] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={headerProfile}
              alt="Dinesh - Full Stack Developer"
              className="relative z-10 w-full h-auto rounded-full shadow-xl"
            />

            {/* Floating DINESH Text */}
            <div className="absolute -right-8 top-1/2 transform translate-x-full -translate-y-1/2 rotate-90 text-white/10 text-2xl font-bold tracking-[1.5rem] hidden lg:block">
              DINESH
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm Dinesh <br />
            <span className="block text-2xl md:text-5xl font-bold bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent whitespace-normal">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Passionate about building scalable web applications, I specialize in both frontend and backend development. From creating intuitive UIs with React to developing robust APIs with Spring Boot, I love solving real-world problems through code. Always curious, always learning.
          </p>

          <div>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] hover:brightness-110 hover:scale-105 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md"
            >
              Connect With Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
