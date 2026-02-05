import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ProjectSlider = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    amount: 0.35,   // % visible before triggering
    once: false     // 👈 allows replay
  });
  const navigateTo = (path) => {
    window.location.href = path;
  };
  const techStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Tailwind",
    "Socket.IO",
    "WebRTC"
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  /* ================== VARIANTS ================== */

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0, backgroundColor: "#6b7280" },
    visible: {
      scaleX: 1,
      backgroundColor: "#ffffff",
      transition: { duration: 1.6, delay: 0.8 }
    }
  };

  /* ================== JSX ================== */

  return (
    <div className='  min-h-screen bg-black'>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <motion.div className="sm1:ml-0 sm:ml-8 max-w-[60%]">
          <motion.h1
            variants={itemVariants}
            className="text-[#A0A0A0] sm2:text-2xl font-semibold mb-6 sm:text-xl"
          >
            Dev Mamgain
          </motion.h1>

          <motion.div variants={itemVariants} className="inline-block">
            <h1 className="text-white md:text-7xl font-bold sm:text-2xl sm2:text-5xl">
              Fullstack Developer
            </h1>

            <motion.div
              variants={underlineVariants}
              className="origin-left h-[3px] bg-white mt-4 rounded-full w-full"
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-cyan-400 md:text-2xl sm:text-lg mt-2"
          >
            Specialized in Frontend & Backend Engineering
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed"
          >
            MERN Stack Developer with 2+ years of experience building scalable SaaS
            platforms, real-time applications, dashboards, and payment systems.
            Specialized in React, Node.js, TypeScript, and modern UI with clean
            architecture.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-2 mt-4"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="text-gray-500"
              >
                •{tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-3 mt-4"          >
            <a href="/updated dev resume.pdf" download>
              <motion.button
                whileHover={{
                  scaleX: 1.08,
                  opacity: 0.8,
                  transition: { duration: 0.3 }
                }}
                className="bg-[#00ffff5e] border border-[#195619] text-white px-[22px] py-[10px] rounded-full flex gap-2 justify-center font-[500] shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
                Download Resume
              </motion.button>
            </a>   <motion.button
              onClick={() => navigateTo('#contactme')}
              whileHover={
                {
                  scaleX: 1.08,
                  opacity: 0.8,
                  transition: {
                    duration: 0.3
                  }
                }
              }
              className='bg-[#00ffff5e] border border-[#195619] text-white  px-[22px] py-[10px] rounded-full flex gap-2  justify-center font-[500]  shadow-xl'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default ProjectSlider;
