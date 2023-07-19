import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, 
  tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1.05, speed: 400 }} 
      className="bg-tertiary p-5 rounded-1xl sm:w-[360px] w-full ">
        <div className=" relative w-full h-[250px]">
          <img  className=" w-full h-full object-cover rounded-1xl" src={image} alt={name} />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
          <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>

              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
<>
<motion.div  variants={textVariant()} >
<p className={styles.sectionSubText}> My Work </p>
<h2 className={styles.sectionHeadText}> Here are some of my projects </h2>
</motion.div>
<div className='w-full flex '>
  <motion.p variants={fadeIn("", "", 0.2, 1)}
  className="mt-3 text-secondary text-[18px] font-semibold max-w-3xl leading-[30px] ">
  
  These projects were created with React and Tailwind, some of them were made while 
  learning, others for work, but always, all of them were made with love ❤.
        
  </motion.p>
</div>
<div className=" mt-20 flex flesx-wrap gap-7">
{ projects.map((project, index) => (
  <ProjectCard key={`project-${index}`} index={index} {...project}/>

))}

</div>

</>
    )
}

export default SectionWrapper(Works, "")