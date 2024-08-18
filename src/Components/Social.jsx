import React from 'react'
import { SOCIAL } from '../Content/index'
import { motion } from 'framer-motion'
const Social = () => {
    return (
        <div className='border-b border-gray-800 text-white mt-20 pb-20'>
            <div >
                <h2 className='text-4xl text-center poppins mb-12'>Connect</h2>
            </div>
            <div >
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='w-full mx-auto flex gap-5 flex-wrap md:justify-center items-center justify-center'>
                    {SOCIAL.map((item, index) => (
                       <a href={item.Link} blank> <div className='flex lg:mx-4 items-center flex-wrap my-2 w-[200px]'>
                            <div className=''>
                                <img className='w-14 mr-4' src={item.icon} alt="" />
                            </div>
                            <div className=''>
                                <h4 className='text-2xl'>{item.name}</h4>
                            </div>
                        </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Social