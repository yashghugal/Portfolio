import React from 'react'
import { HERO_CONTENT } from '../Content/index'
import Profilepic from '../assets/Profile_pic.webp'
import { motion } from 'framer-motion'

const Hero = () => {

    const container=(delay)=>({
        hidden:{x:-100,opacity:0},
        visible:{x:0,opacity:1,transition:{duration:0.5 ,delay:delay}},
    })
    return (
        <div className='lg:px-12 pb-20 mx-auto md:px-10 border-b border-gray-800 md:pb-36 lg:mb-35'>
            <div className='flex flex-wrap items-center'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-10 mt-20 text-5xl text-white -tracking-tight lg:mt-32 lg:text-7xl poppins'>Yash Ghugal</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-bl from-pink-600 to-blue-600 bg-clip-text text-2xl md:text-3xl text-transparent poppins'>Front-End Developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='text-white my-2 max-w-xl py-6 lato'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img initial={{x:100, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1 ,delay:1.3}} className=' lg:mt-20 rounded-xl w-[300px] md:w-[430px]' src={Profilepic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero