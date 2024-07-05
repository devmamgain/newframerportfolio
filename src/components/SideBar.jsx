import { Link } from "react-router-dom"


const SideBar = ()=>{
    return(
        <div className="flex flex-col gap-16 bg-black fixed justify-center items-center min-h-screen px-[2%]">

        <a href="/" className="text-white text-3xl font-extrabold">D</a>
        <a href="/#details" className=" -rotate-90 text-[#A0A0A0] font-semibold">Details</a>
        <a href="/#workproject" className=" -rotate-90 text-[#A0A0A0] font-semibold">Work</a>
        {/* <h2 className=" -rotate-90 text-[#A0A0A0] font-semibold">Projects</h2> */}
        <a href="/#contactme" className=" -rotate-90 text-[#A0A0A0] font-semibold">Contact</a>
        {/* <h2 className=" -rotate-90 text-[#A0A0A0] font-semibold">Contact</h2> */}

        </div>
    )
}

export default SideBar