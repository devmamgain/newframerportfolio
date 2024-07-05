import { motion, useAnimation, useInView, useScroll } from "framer-motion"
import { useEffect, useRef } from "react"

const ContactMe =()=>{
    const containRef = useRef(null)

    const headingproject = "Contact."
    const headingprojectbreak = headingproject.split("")
    const isInView = useInView(containRef)
    const maincontrol = useAnimation()

    useEffect(()=>{
        if(isInView){
            maincontrol.start("visible")
        }
        else {
            maincontrol.start("hidden")
        }
    },[isInView])
    const {scrollYProgress} = useScroll({
        target: containRef,
        offset: ["start end", "end start"]
    })
    return(
        <div className="flex flex-col min-h-screen bg-black" >
                        <div className="ml-[16%] mt-20">

<motion.span ref={containRef} className='text-6xl text-white mt-5 font-extrabold' variants={{visible:{y:0, transition:{duration:0.3, staggerChildren:0.1}}, hidden:{y:20}}} animate={maincontrol} initial="hidden">
  {  headingprojectbreak.map((datahead,index )=><motion.span className=' inline-block' key={index} variants={{visible:{y:0,opacity:1, transition:{duration:0.3}}, hidden:{y:20,opacity:0}}}>{datahead}</motion.span>
     )}
     </motion.span>
    <div className="flex flex-col gap-5 mt-5 w-[30%]">
        <div className="flex flex-col gap-1">
     <h1 className="text-white text-lg font-semibold">Your Name</h1>
     <input type="text" className="rounded-md" placeholder="Whats your good name."/>
     </div>
     <div className="flex flex-col gap-1">
     <h2 className="text-white text-lg font-semibold">Your Email</h2>
     <input type="text" className="rounded-md" placeholder="Whats your good name."/>
     </div>
     <div className="flex flex-col gap-1">
     <h2 className="text-white text-lg font-semibold">Your Message</h2>
      <input type="area" className="rounded-md" placeholder="Write your message."/>
      </div>
      </div>
     </div>
        </div>
    )
}

export default ContactMe