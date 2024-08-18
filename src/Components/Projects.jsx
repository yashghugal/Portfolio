import React from 'react'
import { PROJECTS } from '../Content'
import { motion } from 'framer-motion'
import share from '../assets/share.png'

const Projects = () => {
  return (
    <div className='border-b border-gray-800 pb-4 text-white'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className='my-20 text-center text-4xl'>
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((item,index)=>(
                <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='w-full md:2/4 lg:w-1/4 '>
                        <img src={item.image} alt={item.title} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='lg:pl-14 w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-medium poppins flex justify-between'><span>{item.title}</span><a className='px-2 bg-blue-600 py-1 rounded flex items-center' href={item.link}><span className='pr-3 text-lg lato'>Live</span><img className='w-5 h-5' src={share} alt="" /></a></h6>
                        <p className='mb-4 text-slate-400 lato' >{item.description}</p>
                      <div className='flex flex-wrap mt-2'>  {item.technologies.map((item,index)=>(
                            <div key={index} className='mt-2'>
                                <div className='bg-blue-950 text-white mr-2 px-2 py-1.5 rounded-sm lato'>{item}</div>
                            </div>
                        ))}</div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects