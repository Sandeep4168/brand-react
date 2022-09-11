import React from "react";
import {
  CloudIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";

import bgImg from "../assets/innovation-animate.svg";

const Hero = () => {
  return (
    <div name='home' className='w-full  bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] my-10 mx-10 justify-center'>
            <div className='flex flex-col justify-center m-4  w-full px-10 py-[80px] sm:py'>
                <p className='text-2xl md:text-3xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management.</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 '>Get Started</button>
            </div>
            <div className="flex justify-center">
                <img className='w-[80%] scale-100 hover:scale-110 sm:max-w-[60%] duration-500' src={bgImg} alt="/" />
            </div>
            
        </div>
        <div className=' flex flex-col py-8  md:min-w-[760px] mb-[-2rem] max-w-[1240px]
            m-auto  bg-zinc-200 justify-center
            border border-slate-300 rounded-xl text-center shadow-xl'>
                
                <div className='flex justify-between flex-wrap px-4 md:justify-start'>
                    <p className='flex px-6 py-2 text-slate-600'><CloudIcon className='h-6 px-3 text-indigo-600' /> App Security</p>
                    <p className='flex px-6 py-2 text-slate-600'><CircleStackIcon className='h-6 px-3 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-6 py-2 text-slate-600'><ServerStackIcon className='h-6 px-3 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-6 py-2 text-slate-600'><PaperAirplaneIcon className='h-6 px-3 text-indigo-600' /> API</p>
                </div>
            </div>
    </div>
  );
};

export default Hero;
