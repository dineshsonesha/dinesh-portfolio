import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Make sure to install: npm install emailjs-com

const Contact = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: "Portfolio Visitor",
      to_name: "Dinesh",
      message: "Hi Dinesh, I'm interested in your portfolio. Let's connect!",
    };

    emailjs
      .send(
        'service_davo4yh',
        'template_vw1tzrs',
        templateParams,
        'NlLoYgIE1SlXU7VH1' 
      )
      .then(
        () => alert("Mail sent successfully to Dinesh!"),
        () => alert("Failed to send mail. Please try again.")
      );
  };

  const socialLinks = [
    { icon: "ri-github-fill", href: "https://github.com/dineshsonesha" },
    { icon: "ri-linkedin-fill", href: "https://www.linkedin.com/in/dinesh-sonesha/" },
    { icon: "ri-instagram-fill", href: "https://www.instagram.com/dinesh_sonesha/" },
    { icon: "ri-mail-send-line", href: "#", onClick: handleSendEmail },
    {
      icon: "ri-whatsapp-line",
      href: "https://wa.me/918108838046?text=Hi%20Dinesh%2C%20I%20am%20interested%20in%20your%20portfolio.%20Can%20we%20connect%3F",
    },
  ];

  return (
    <section id="contact" className="py-15 px-4 text-center text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div
          className="w-20 h-20 mx-auto flex items-center justify-center text-2xl font-bold text-white rounded-full"
          style={{
            background: 'linear-gradient(135deg, #e9615e, #ec9956)',
            boxShadow: '0 0 30px rgba(236, 153, 86, 0.6)',
          }}
        >
          D
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Let's Talk{' '}
        <span
          style={{
            background: 'linear-gradient(to right, #e9615e, #ec9956)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          With Me!
        </span>
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed"
      >
        An open invitation to connect and explore collaborative opportunities on my personal portfolio website.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 mt-10 flex-wrap"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            onClick={(e) => {
              if (social.onClick) {
                social.onClick(e); // Call handler and prevent default
              }
            }}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.15,
              background: 'linear-gradient(135deg, #e9615e, #ec9956)',
              boxShadow: '0 0 20px rgba(236, 153, 86, 0.6)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-14 h-14 flex items-center justify-center text-white text-xl rounded-full border border-white/20 bg-white/5"
          >
            <i className={social.icon}></i>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
