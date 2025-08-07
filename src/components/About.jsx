import React from 'react';
import { motion } from 'framer-motion';
import aboutMain from '../assets/about_profile.png';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-sm mx-auto isolate"
        >
          <div className="relative z-10">
            <img
              src={aboutMain}
              alt="About Dinesh"
              className="rounded-4xl shadow-lg w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Bit About <span className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            I am a passionate and detail-oriented web developer who enjoys solving problems through technology. With a strong foundation in both frontend and backend development, I focus on creating clean, responsive, and user-friendly web experiences.<br />
            I believe in writing maintainable code, learning continuously, and building digital solutions that create real value. My approach combines curiosity, discipline, and a desire to always improve—not just what I build, but how I build it.<br />
            When I'm not coding, I enjoy exploring new tech trends and enhancing my development practices to stay ahead in this fast-evolving field.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
