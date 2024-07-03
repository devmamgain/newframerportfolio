import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import reduxpayimg from "../assets/reduxpayy.png"
import reduxpayimg2 from "../assets/reduxpay2.png"
import breezetravelimg from "../assets/BreezeTravel.png"
import clickcartimg from "../assets/ClickCart.png"

const WorkProject = ()=>{
    const heading = "Work"
    const headingbreak = heading.split("")
    const containRef = useRef(null)
   const [showingdetail,setShowingDetail] = useState(false)
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
    const formydetail = useTransform(
        scrollYProgress,
        [0,1],
        ["-50%", "0%"],
      
    )
    const foropacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9, 1])
    const formyskill = useTransform(
        scrollYProgress,
        [0,1],
        ["50%", "0%"],
       
    )

    const projectdata = [{
        projectname:"ReduxPay",
        title:" Online Payment Gateway",
        about:"It is an online payment gateway where businessman can manage their Payouts.Reduxpay is design and developed by me from scratch",
        skills:" ReactJs, Tailwind Css, RazorPay Api, NodeJs, ChartJs, AES, Git",
        img:reduxpayimg
        },
        {
            projectname:"Breeze Travel",
            title:"ReactJs, TailwindCss, NodeJs, MongoDB",
             about:"It uses JWTTOKEN for authentication, purchasing hotels and uses razporpay payment gateway.One can look for hotel in any state, filter hotels by no. of rooms, beds, price, hotel category, etc.",
            skills:" ReactJs, Tailwind Css, RazorPay Api, NodeJs, ChartJs, AES, Git",
            img:breezetravelimg
            },
            {
                projectname:" ClickCart",
                title:" E-Commerce Website That Uses React, Sanity and Stripe",
                 about:"This project has every major feature you would expect from a modern e-commerce app, such as an attractive and accessible user interface, a powerful shopping cart",
                skills:" Reactjs, JavaScript, HTML, Expressjs, Git, NextJs",
                img:clickcartimg
                }
    ]
        
    const HorizontalScrollCarousel = () => {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
        });
      
        const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
        return(
            <section ref={targetRef} className="relative w-[70%] mt-20 h-[300vh]">
                <div className="flex flex-col sticky top-0 gap-10 overflow-hidden h-screen justify-center ">
            <h1 className="text-white font-semibold text-2xl text-center">Project</h1>

            <div className="flex">

            <motion.div style={{ x }} className="flex gap-20 hover:bg-">
            
            {projectdata.map((data, index)=>  <div key={index} className="group relative overflow-hidden w-[140vh] flex-none transition-transform duration-300 transform hover:scale-105" >
                    <h1 className="text-white ">{data.projectname}</h1>
                    <img className="" src={data.img} alt="no image"/>
                    <p className="text-white ">Tools and Technologies: {data.skills}</p>
                    <p className="text-white ">About {data.about}</p>
                    </div>)}
                    </motion.div>
                    </div>
                    </div>
                    </section>
        )
    }
    return(
        <div className="flex flex-col min-h-screen items-center bg-black" >
   <motion.span ref={containRef} className='text-3xl text-white mt-20' variants={{visible:{y:0, transition:{duration:0.3, staggerChildren:0.1}}, hidden:{y:20}}} animate={maincontrol} initial="hidden">
  {  headingbreak.map((datahead,index )=><motion.span className=' inline-block' key={index} variants={{visible:{y:0,opacity:1, transition:{duration:0.3}}, hidden:{y:20,opacity:0}}}>{datahead}</motion.span>
     )}
     </motion.span>
     <motion.p style={{translateX: formydetail, opacity: foropacity}} className=' text-white w-[40%]'>
   I worked at React JS Developer At StoreShoppy Pvt.Ltd as an intern from Feb. 2024- May. 2024
• We transform client idea into practical solutions, addressing their business challenges effectively.
 • Developed Reduxpay, LiquidityFunder and a trading game
</motion.p>
<HorizontalScrollCarousel/>
{/* <section ref={projectsRef} className="relative w-[70%] mt-20 h-[300vh]">
<h1 className="text-white font-semibold text-2xl text-center">Project</h1>

<div className="flex sticky top-0 h-screen gap-10 overflow-hidden  mt-20">
<motion.div style={{ x }} className="flex gap-4">

{projectdata.map((data, index)=>  <div key={index} className="w-80 group relative overflow-hidden">
        <h1 className="text-white ">{data.projectname}</h1>
        <img className="" src={data.img} alt="no image"/>
        </div>)}
        </motion.div>
        </div>
        </section> */}
        </div>
    )
}
export default WorkProject 