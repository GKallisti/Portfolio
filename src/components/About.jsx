import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services }  from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard =({ icon, title, index }) => {
   
  return (
  <Tilt className='xs:w-[250px]  w-full'>
    <motion.div variants={fadeIn('right','spring',0.4 * index, 0.75)}
     className='w-full green-gradient p-[1px] rounded-[20px] shadow-card '>
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }} className=' bg-black-100 px-12 py-5 min-h-[280px] 
      flex justify-evenly items-center flex-col'>
        
      <img src={icon} alt={title} className='w-16 h-16 object-contain '/>
      <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
      </div>
      </motion.div> 
  </Tilt>
    )}

const About = () => {
  return (
    <>
    <motion.div className=' mt-4 text-secondary text[17px] 
    max-w-3xl leading-[30px] mb-5' 
    variants={textVariant()}>
      <p className={styles.sectionSubText}> Introduction </p>
      <h2 className={styles.sectionHeadText}> Overview. </h2>
    </motion.div>
    <motion.p
    variants={fadeIn('','',0.5,1)} className='text-secondary font-bold text-[20px]'>
      Hello! I'm Gisella, an Argentine developer with experience 
      in graphic design and an unwavering love for programming 
      and video games.

      At 29 years old, I consider myself a curious and creative 
      person, always seeking new challenges and opportunities to 
      learn. I enjoy working in teams, collaborating with other 
      professionals to create innovative and high-quality solutions.
    </motion.p>
    <div className=' mt-20 flex flex-wrap gap-10 text-white'>
      {services.map((service, index) => ( 
        <ServiceCard key={service.title} index={index}
        {...service}
        />
  
      ))}


    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')