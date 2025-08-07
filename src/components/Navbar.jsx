import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-[#1b1e2c]/80 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-5 flex items-center justify-between shadow-lg"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold shadow-inner transition duration-300">
          D
        </div>
        <span className="text-white text-lg font-semibold tracking-wide font-poppins">
          Dinesh Sonesha
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center text-white text-[1.05rem] font-medium font-poppins">
        <a href="#home" className="group relative text-white text-[1.05rem] font-medium font-poppins pb-1">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#e9615e] to-[#ec9956] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="group relative pb-1 text-white" onClick={toggleMenu}>
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#e9615e] to-[#ec9956] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#skills" className="group relative pb-1 text-white" onClick={toggleMenu}>
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#e9615e] to-[#ec9956] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="group relative pb-1 text-white" onClick={toggleMenu}>
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#e9615e] to-[#ec9956] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative pb-1 text-white" onClick={toggleMenu}>
          Role
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#e9615e] to-[#ec9956] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="ml-4 bg-gradient-to-br from-[#e9615e] to-[#ec9956] px-6 py-2 text-white font-bold rounded-full shadow-md hover:shadow-[0_0_12px_2px_rgba(255,120,50,0.5)] hover:brightness-110 hover:scale-105 transition duration-300"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* AnimatePresence for smooth menu exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[80px] left-0 w-full bg-[#1b1e2c]/95 rounded-b-2xl px-6 py-5 flex flex-col items-center gap-5 text-white font-medium text-[1.05rem] md:hidden shadow-md border-t border-white/10 font-poppins"
          >
            <a href="#home" className="hover:text-orange-400" onClick={toggleMenu}>Home</a>
            <a href="#about" className="hover:text-orange-400" onClick={toggleMenu}>About</a>
            <a href="#skills" className="hover:text-orange-400" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="hover:text-orange-400" onClick={toggleMenu}>Projects</a>
            <a href="#services" className="hover:text-orange-400" onClick={toggleMenu}>Services</a>
            <button
              onClick={toggleMenu}
              className="bg-gradient-to-br from-[#e9615e] to-[#ec9956] px-6 py-2 text-white font-bold rounded-full hover:shadow-[0_0_12px_2px_rgba(255,120,50,0.5)] hover:brightness-110 hover:scale-105 transition duration-300"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
