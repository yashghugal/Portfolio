import React from 'react'
import { INTERNSHIP } from '../Content'
import { motion } from 'framer-motion'

const Workexp = () => {
  return (
    <div>
      <div className='border-b border-gray-800 pb-4 text-white lato'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl '>Internship</motion.h1>
        <div className='mb-24'>
          {INTERNSHIP.map((item, index) => (
            <div key={index} className=' text-white mb-8 flex flex-wrap lg:justify-center'>
              <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0 ,x:-100}}  transition={{duration:1}} className='w-full md:w-1/2 lg:w-1/2'>
                <p className='mb-2 text-slate-400 md:text-center md:text-lg lg:text-center'>{item.year}</p>
              </motion.div>
              <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0 ,x:100}}  transition={{duration:1}} className=' w-full max-w-xl md:w-1/2 lg:w-1/2'>
                <h1 className=' text-xl lato'>
                  {item.company}
                </h1>
                <h6 className=' py-1 text-lg lato text-slate-200'>{item.role}</h6>
                <h6 className=' py-1  lato text-slate-400'>{item.description}</h6>
                <div className='flex flex-wrap mt-2'>
                {item.technologies.map((item,index)=>(
                            <div key={index} className='mt-2'>
                                <div className=' bg-blue-950 text-white mr-2 px-2 py-1.5 rounded-sm lato'>{item}</div>
                            </div>
                        ))}
                </div>
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

export default Workexp