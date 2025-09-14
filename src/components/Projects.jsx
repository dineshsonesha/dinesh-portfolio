import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/project_1.svg";
import project2 from "../assets/project_2.svg";
import project7 from "../assets/project_7.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      desc: "A full-stack shopping platform with user authentication, product filtering, cart and payment integration.",
      image: project1,
      tech: ["React", "Spring Boot", "MySQL"],
      link: "#",
    },
    {
      id: 2,
      title: "Library Management System",
      desc: "Desktop-based software for managing library inventory, issuing books, and tracking student activity.",
      image: project2,
      tech: ["Java", "MySQL"],
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "A personal responsive portfolio to showcase projects, skills, and contact information.",
      image: project7,
      tech: ["React", "Tailwind CSS"],
      link: "https://dinesh-portfolio-mu.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-15 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Creative{" "}
          <span className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className="relative group rounded-2xl p-[2px] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e9615e] to-[#ec9956] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 z-0"></div>
              <div className="relative z-10 flex flex-col h-full bg-[#111827] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="flex flex-col flex-1 p-6 text-left justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:bg-gradient-to-br group-hover:from-[#e9615e] group-hover:to-[#ec9956] group-hover:bg-clip-text group-hover:text-transparent transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 text-sm mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full bg-[#ffffff0a] text-transparent bg-clip-text bg-gradient-to-br from-[#e9615e] to-[#ec9956] border border-[#ec9956] text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-transparent bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
