import React from 'react';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs, FaAngular, FaPython} from 'react-icons/fa';
import {SiMysql, SiTailwindcss, SiSpringboot, SiMongodb} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Postman', icon: <i className="devicon-postman-plain colored text-2xl"></i> },
  { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored text-2xl"></i> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
  { name: 'Express', icon: <i className="devicon-express-original text-white text-2xl"></i> },
  { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-15 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          My <span className='bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent'>Skills</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="p-4 w-full h-28 flex flex-col items-center justify-center gap-2 rounded-lg border border-white/10 hover:shadow-lg transition-transform duration-300 hover:scale-115"
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-sm text-white font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
