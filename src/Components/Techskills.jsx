import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javscript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import figma from '../assets/figma.png'
import cplus from '../assets/Cplus.png'
import { animate, motion } from 'framer-motion'

const Techskills = () => {
    const iconvarients = (duration)=>({
        initial: {y: -10},
        animate:{y:[10,-10],transition:{duration:duration, ease:"linear",repeat:Infinity,repeatType:"reverse"}
        }
    })
  return (
    <div className='border-b border-gray-800 pb-32 '>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl text-white'>Technical Skills</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconvarients(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={html} />
            </motion.div>
            <motion.div  variants={iconvarients(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={css} />
            </motion.div>
            <motion.div  variants={iconvarients(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={javscript} />
            </motion.div>
            <motion.div  variants={iconvarients(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={react} />
            </motion.div>
            <motion.div  variants={iconvarients(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={tailwind} />
            </motion.div>
            <motion.div  variants={iconvarients(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={cplus} />
            </motion.div>
            <motion.div  variants={iconvarients(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-gray-600 p-4'>
                <img className='w-20' src={figma} />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Techskills