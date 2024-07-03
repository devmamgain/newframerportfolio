import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';

const ProjectSlider = () => {
  const [backfront,setBackFront] = useState(true)
  const displaying = {
    hidden:{
      opacity:0,
      x:-50
    },
    visible:{
        opacity:1,
        transition:{
          delay:1,
        },
        x:0
    }
  }

 const career = "Frontend"
 const careerbreak = career.split("")
 const newCareer = "Backend\u00A0";
const newCareerBreak = newCareer.split("");
useEffect(() => {
  const interval = setInterval(() => {
    setBackFront(prev => !prev);
  }, 6800); 

  return () => clearInterval(interval);
}, []);
  return (


    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <motion.div initial={{opacity:0, x:-150}} animate={{opacity:1,x:0, transition:{duration:0.8, delay:0.4}}}>
      <h1 className='text-[#A0A0A0] text-2xl font-semibold mb-6'>D e v {"\u00A0"}M a m g a i n</h1>
      <h1 className='text-white text-7xl font-bold'>Fullstack Developer</h1>
      </motion.div>
      {/* <motion.h1  variants={{initial:{backgroundColor:"cyan"},final:{backgroundColor:"transparent",transition:{duration:0.5,delay:1}}}} initial="initial" animate="final">  <span>Fullstack Developer</span></motion.h1> */}
     
    {/* <motion.div className='text-center text-3xl ' variants={{visible:{y:0, transition:{duration:0.3, staggerChildren:0.1}}, hidden:{y:20}}} animate="visible" initial="hidden">
  {  headingbreak.map((datahead,index )=><motion.span className=' inline-block' key={index} variants={{visible:{y:0,opacity:1, transition:{duration:0.3}}, hidden:{y:20,opacity:0}}}>{datahead}</motion.span>
     )}
     </motion.div> */}
 
   <motion.div className='flex ' variants={{visible:{y:0, transition:{duration:0.5, staggerChildren:0.3, delay:0.4},opacity:1}, hidden:{y:50,opacity:0}}} animate="visible" initial="hidden" >
   <h1 className='text-[#A0A0A0] text-8xl font-extrabold'>+</h1>

  { (backfront ? careerbreak : newCareerBreak).map((datahead,index )=><motion.span className=' inline-block text-white text-7xl font-bold' key={index} variants={{visible:{y:0, opacity:1,transition:{duration:0.5, repeatType:"reverse", repeatDelay:3,repeat:Infinity}}, hidden:{y:20,opacity:0}}} >{datahead}</motion.span>
     ) }
     </motion.div>
     </div>

  );
};

export default ProjectSlider;
