import { useState } from "react";
import Earth_pic from "./assets/Earth.jpg";
import { AnimatePresence, motion } from "framer-motion";
 import{ Navbar } from "./components/Navbar.tsx"





function App(){
  const [isOpen,setIsOpen] = useState<boolean>(true)

  const burger = {opened: (deg:string)=>({
    rotate:deg,
  }),
  closed:{
    rotate:0,
  }
}

const image = {
  scaleNormal : {
    scale:1,
    transition: {
      delay:0.2,
      duration:0.4,
      ease : "easeOut",
    }
  },
  scaleDown : {
    scale:0.85,
    transition: {
      duration:0.4,
      ease : "easeOut",
    }
  }
}
    


  
  return <div className="h-screen w-screen overflow-hidden ">
    <motion.img src={Earth_pic} alt="" className="absolute inset-0 w-full h-full object-cover origin-bottom" variants={image} animate={isOpen ? "scaleNormal":"scaleDown"} />
    <section className="w-full h-full px-10 pt-10 ">
      <div className="w-full p-2 px-6 border border-[#eaeaea] border-dashed flex justify-between items-center z-40 relative rounded-lg">
        <h1 className="font-bold text-white text-4xl uppercase">Planet.</h1>
        <div className="space-y-2 cursor-pointer " onClick={()=>{setIsOpen(!isOpen)}}>
          <motion.div className="w-[30px] h-[2px] bg-[#eaeaea] origin-left " variants={burger} animate={isOpen ? "closed":"opened"} custom={"20deg"}></motion.div>
          <motion.div className="w-[30px] h-[2px] bg-[#eaeaea] origin-left" variants={burger} animate={isOpen ? "closed":"opened"} custom={"-20deg"}></motion.div>
        </div>
      </div>
      
    </section>
    <AnimatePresence>

    {
      isOpen ? null : (<Navbar/>)
    }

    </AnimatePresence>
  
   
  </div>
}


export default App