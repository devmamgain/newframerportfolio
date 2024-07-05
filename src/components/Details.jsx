import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const Details =()=>{
    const heading = "Overview."
    
    const headingbreak = heading.split("")
  
    const aboutskill = "Skills."
    const aboutskillbreak = aboutskill.split("")
    const aboutMyself = `
    I am Dev Mamgain, a recent graduate with a B.Tech in Computer Science from Inderaprastha Engineering College (2024). I specialize in Fullstack Development, having completed extensive training with GeeksforGeeks.
    My passion lies in leveraging cutting-edge technologies to develop robust and user-centric applications.
    `
    const myselfbreak = aboutMyself.split(" ")
    const containRef = useRef(null)
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
        offset: ["start end", "end end"]
    })
    const formydetail = useTransform(
        scrollYProgress,
        [0,0.6],
        ["-50%", "0%"],
      
    )
    const foropacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.9, 1])
    const formyskill = useTransform(
        scrollYProgress,
        [0,0.6],
        ["50%", "0%"],
       
    )
    console.log(isInView)
    // function splitIntoChunks(array, chunkSize) {
    //     let results = [];
    //     for (let i = 0; i < array.length; i += chunkSize) {
    //         results.push(array.slice(i, i + chunkSize).join(" "));
    //     }
    //     return results;
    // }
    
    // const chunks = splitIntoChunks(myselfbreak, 6);
        return(
        <div className="flex flex-col min-h-screen bg-black" >
          <div className="mt-10 sm1:ml-[16%] sm:ml-[20%] sm1:w-[40%] sm:w-[60%]">
            <h1 className="sm2:text-lg text-[#A0A0A0] sm:text-base">Introduction</h1>
             <motion.span ref={containRef} className='md:text-6xl text-white font-extrabold sm2:text-4xl sm:text-2xl' variants={{visible:{y:0, transition:{duration:0.3, staggerChildren:0.1}}, hidden:{y:20}}} animate={maincontrol} initial="hidden">
  {  headingbreak.map((datahead,index )=><motion.span className=' inline-block' key={index} variants={{visible:{y:0,opacity:1, transition:{duration:0.3}}, hidden:{y:20,opacity:0}}}>{datahead}</motion.span>
     )}
     </motion.span>
    
           <motion.p style={{translateX: formydetail, opacity: foropacity}} className=' text-white '>
          {aboutMyself}
</motion.p>
</div>

<div className="ml-auto sm1:mr-[16%] sm:mr-[20%] sm1:w-[30%] sm:w-[60%]">

<motion.div ref={containRef} className='md:text-6xl text-white font-extrabold sm2:text-4xl sm:text-2xl' variants={{visible:{y:0, transition:{duration:0.3, staggerChildren:0.1}}, hidden:{y:20}}} animate={maincontrol} initial="hidden">
  {  aboutskillbreak.map((datahead,index )=><motion.span className=' inline-block' key={index} variants={{visible:{y:0,opacity:1, transition:{duration:0.3}}, hidden:{y:20,opacity:0}}}>{datahead}</motion.span>
     )}
     </motion.div>
   
   
     <motion.h1 style={{translateX: formyskill, opacity: foropacity}} className="text-white flex flex-col font-semibold text-lg">Languages: <span className="text-white font-normal text-base">HTML, CSS, JavaScript, Bash</span></motion.h1>
     <motion.h1 style={{translateX: formyskill, opacity: foropacity}} className="text-white flex flex-col font-semibold text-lg">Technologies & Tools: <span className="text-white font-normal text-base">React.js, Framer Motion, Tailwind CSS, Node.js, Git, Express.js, Chart JS, MongoDB, Firebase, AES.</span></motion.h1>
     </div>
     <motion.div 
     variants={
      {
        hidden:{
          opacity:0
        },
        visible:{
         opacity:1,
         transition:{
          duration:0.8,
          staggerChildren:0.4
         }
        }
      }
    }
    initial="hidden"
    ref={containRef}
    animate={maincontrol}
     className="flex flex-wrap mt-5 p-10 gap-[3%] justify-center">
      <motion.div 
      variants={{hidden:{opacity:0},visible:{opacity:1}}}
      className="border-2 border-cyan-900 rounded-2xl px-12 py-14 w-[15%] flex flex-col gap-5 items-center h-[300px]" >
     <motion.svg
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     aria-hidden="true"
     role="img"
     className="iconify iconify--logos"
     width="120"
     height="100"
     preserveAspectRatio="xMidYMid meet"
     viewBox="0 0 256 256"
    >
      <motion.path
       fill="none"
       stroke="#00D8FF"
       strokeWidth="7"
       strokeDasharray="1 1"
       strokeDashoffset="1"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
      />
    </motion.svg>
    <h1 className="text-white font-bold text-4xl">ReactJs</h1>

    </motion.div>
    <motion.div 
          variants={{hidden:{opacity:0},visible:{opacity:1}}}

    className="border-2 border-cyan-900 rounded-2xl px-12 py-16  w-[15%] h-[300px] flex flex-col gap-5 items-center">

    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      width={108}  // Double the original width
      height={66}  // Double the original height
    >
      <g clip-path="url(#prefix__clip0)">
        <motion.path
          fill="#38bdf8"
          fill-rule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clip-rule="evenodd"
          initial={{ opacity: 0, scale: 0.5 }}  // Initial animation state
          animate={{ opacity: 1, scale: 1 }}   // Animation to full size and opacity
          transition={{ duration: 0.5 }}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </motion.svg>
    <span className="text-white font-bold text-4xl ">Tailwind</span>
    <span className="text-white font-bold text-4xl ">CSS</span>

    </motion.div>
    <motion.div 
          variants={{hidden:{opacity:0},visible:{opacity:1}}}

    className="border-2 border-cyan-900 rounded-2xl px-12 py-16 w-[15%] h-[300px] flex flex-col gap-5 items-center">

    <motion.svg
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     aria-hidden="true"
     role="img"
     className="iconify iconify--logos"
     width="80"
     height="80"
     preserveAspectRatio="xMidYMid meet"
     viewBox="0 0 32 32"
    >
      <motion.path
       fill="none"
       stroke="#00D8FF"
       strokeWidth="1"
       strokeDasharray="1 1"
       strokeDashoffset="1"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"
      />
    </motion.svg>
    <h1 className="text-white font-bold text-4xl">NodeJs</h1>

    </motion.div>
    <motion.div 
          variants={{hidden:{opacity:0},visible:{opacity:1}}}

    className="border-2 border-cyan-900 rounded-2xl px-12 py-16 w-[15%] h-[300px] flex flex-col gap-5 items-center">

    <motion.svg
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     aria-hidden="true"
     role="img"
     className="iconify iconify--logos"
     width="80"
     height="80"
     preserveAspectRatio="xMidYMid meet"
     viewBox="0 0 50 50"
    >
      <motion.path
       fill="none"
       stroke="#00D8FF"
       strokeWidth="1"
       strokeDasharray="1 1"
       strokeDashoffset="1"
        initial={{ pathLength: 0, pathOffset: 1, fill: "none" }}
        animate={{ pathLength: 1, pathOffset: 0, fill: ["none", "green"] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse'}}
      d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z"
 />
    </motion.svg>
    <h1 className="text-white font-bold text-4xl">MongoDB</h1>

    </motion.div>
    </motion.div>
        </div>
    )
}

export default Details