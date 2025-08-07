import React from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

// Animation variants
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
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  const services = [
    {
      icon: "ri-layout-4-fill", 
      title: "Website Designer",
      desc: "We craft user-friendly interfaces that engage visitors and help you achieve your online goals with minimum effort.",
    },
    {
      icon: "ri-code-s-slash-line", 
      title: "Backend Development",
      desc: "We build secure, scalable, and user-centric online stores that enhance the shopping experience and drive conversions.",
    },
    {
      icon: "ri-database-2-line", 
      title: "Database Management",
      desc: "We provide comprehensive database management services to ensure your data is organized, secure, and accessible.",
    },
    {
      icon: "ri-code-box-line", 
      title: "Full Stack Development",
      desc: "We create dynamic and responsive web applications using the latest technologies.",
    },
    {
      icon: "ri-stack-line", 
      title: "MERN Stack Development",
      desc: "Our MERN stack development services help you build robust and scalable web applications.",
    },
    {
      icon: "ri-cloud-line", 
      title: "Cloud Services",
      desc: "We offer cloud solutions that enhance scalability, security, and collaboration for your business.",
    },
  ];

  return (
    <section id="services" className="py-15 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
          My Best <span className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent">Services</span>
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="relative group p-[2px] rounded-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e9615e] to-[#ec9956] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 z-0"></div>

              {/* Card content with border and equal height */}
              <div className="relative z-10 flex flex-col h-full bg-[#111827] rounded-2xl overflow-hidden shadow-md border border-white/10 p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e9615e] to-[#ec9956]">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-semibold mb-3 group-hover:bg-gradient-to-br group-hover:from-[#e9615e] group-hover:to-[#ec9956] group-hover:bg-clip-text group-hover:text-transparent transition">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed flex-1">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
