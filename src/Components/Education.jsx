import React from 'react'
import { EDUCATION } from '../Content/index'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div>
      <div className='border-b border-gray-800 pb-4 text-white lato'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl '>Education</motion.h1>
        <div className='mb-24'>
          {EDUCATION.map((item, index) => (
            <div key={index} className=' text-white mb-8 flex flex-wrap lg:justify-center'>
              <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='w-full md:w-1/2 lg:w-1/2'>
                <p className='mb-2 text-slate-400 md:text-center md:text-lg lg:text-center'>{item.year}</p>
              </motion.div>
              <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className=' w-full max-w-xl md:w-1/2 lg:w-1/2'>
                <h1 className=' text-xl lato'>
                  {item.stream}
                </h1>
                <h6 className=' py-1 text-lg lato text-slate-300'>{item.school}</h6>
              </motion.div>
              <div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education