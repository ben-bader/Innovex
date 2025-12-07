"use client";
import { div } from 'motion/react-client';
import {MouseEventHandler, useState} from 'react'
import {RiGithubLine,RiFacebookLine,RiLinkedinFill,RiKickLine} from "react-icons/ri";

const Button = ({text,className,onClick} : {text ?: string,className ?: string ,onClick ?: MouseEventHandler}) => {
  return (
    <button className={` text-white py-2 px-10 rounded-md ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}


const Form = () => {
    const [toggle,setToggle] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='h-screen flex items-center px-20'>

   <div className='absolute top-[0%] left-[0%] bg-gradient-to-tr from-fuchsia-500 to-blue-600 blur-[90px] rounded-full w-[30rem] h-[20rem] -z-10'/>
   <div className='absolute bottom-0 right-0 bg-cyan-500 blur-[90px] rounded-full w-[30rem] h-[20rem] -z-10'/>
    <div className="flex flex-1  justify-center items-center border border-white/20 backdrop-blur-3xl  rounded-3xl relative md:px-8 md:py-12 px-2 py-4 w-full">
    <div className="flex w-full gap-16 ">
        <div className={`flex flex-col  justify-center items-center w-full gap-5 ${isVisible ? "flex" : "hidden"}`}>
            <h1 className="text-4xl font-bold">Log In</h1>
                <div className="flex justify-center gap-4">
                    <RiGithubLine size={40}   className="border rounded-md border-white/50  p-2 text-gray-300 cursor-pointer"/>
                    <RiFacebookLine size={40} className="border rounded-md border-white/50  p-2 text-gray-300 cursor-pointer"/>
                    <RiLinkedinFill size={40} className="border rounded-md border-white/50  p-2 text-gray-300 cursor-pointer"/>
                    <RiKickLine size={40}     className="border rounded-md border-white/50  p-2 text-gray-300 cursor-pointer"/>
                    
                </div>
                
            <form action="" className="flex flex-col gap-5 w-full justify-center items-center px-5">
            <p className="font-poppins text-gray-300">or use you&apos;re Email password</p>
               
                <input type="email" placeholder="Email" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none placeholder:text-gray-100 focus:scale-105 duration-300" required/>
                <input type="password" placeholder="Password" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none placeholder:text-gray-100 focus:scale-105 duration-300" required/>
                <p className="mt-3 font-poppins">Forget You&apos;re{" "}<a href="" className="text-blue-500 underline">Password?</a></p>
                <Button text="Log In" className="bg-blue-500 cursor-pointer w-[70%] mt-3  font-semibold text-xl"/>
            </form>
            <p className='block md:hidden font-poppins'>Don&apos;t have an acount <a className='underline text-blue-500 cursor-pointer sm:hidden' onClick={() => setIsVisible(!isVisible)}>Sign Up</a></p>
        </div>
        
        <div id='Sign-up' className={`lg:flex flex-col justify-center items-center w-full gap-5 ${isVisible ? "hidden" : "flex"}`}>
            <h1 className="text-4xl font-bold">Sign Up</h1>
           
                <div className="flex justify-center gap-4">
                    <RiGithubLine size={40}   className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"/>
                    <RiFacebookLine size={40} className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"/>
                    <RiLinkedinFill size={40} className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"/>
                    <RiKickLine size={40}     className="border rounded-md border-white/50 text-gray-300 p-2 cursor-pointer"/>
                    
                </div>
                
            <form action="" className="flex flex-col gap-5 w-full justify-center items-center px-5">
                <input type="text" placeholder="Username" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none focus:scale-105 duration-500" required/>
                <input type="email" placeholder="Email" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none focus:scale-105 duration-500" required/>
                <input type="password" placeholder="Password" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none focus:scale-105 duration-500" required/>
                <input type="password" placeholder="Confirm Password" className="py-2 px-4  bg-gray-500/30 border border-white/20 rounded-md w-full outline-none focus:scale-105 duration-500" required/>
                <Button text="Sign Up" className="bg-purple-500 w-[80%] mt-3 cursor-pointer font-semibold text-xl "/>
            </form>
            <p className='block md:hidden font-poppins'>Already have an acount <a href="#Log_in" className='underline text-blue-500 cursor-pointer sm:hidden' onClick={() => setIsVisible(!isVisible)}>Log In</a></p>
        </div>
        
    </div>
    <div className="gap-4 flex-col lg:flex hidden items-center text-center text-white bg-gradient-to-tr from-blue-700 to-purple-400 px-3 py-36 z-50 absolute w-[50%] top-0  right-0 h-full duration-1000"
    style={{
        transform: toggle ? "translateX(-100%)" : "",
        borderRadius : toggle ? "1.5rem  200px 150px 1.5rem" : "  200px  1.5rem 1.5rem 150px"
      }}
    >
            <h1 className="text-4xl font-boldonse gap-4 font-semibold tracking-[3px]">{!toggle ? "Welcome Back" : "Hello Friend"}</h1>
            <p className="font-poppins opacity-50">{!toggle ? "Log In And Continue you're journy to the Most Epic adventure in the Web." : "Register Now And have The most Unique and Futuristic Experience In the web."}</p>
           <span>Or</span>
            <Button text={toggle ? "Log In" :"Sign Up"} className="border cursor-pointer border-gray-300 bg-transparent !px-20  font-semibold text-xl" onClick={() => setToggle(!toggle)}/>
        </div>
    </div>
     </div>
  )
}

export default Form
