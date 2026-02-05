import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ProjectSlider = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    amount: 0.35,   // % visible before triggering
    once: false     // 👈 allows replay
  });

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
            Dev Mamgain (Development going on)
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
