import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const {name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })

    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gisella",
          from_email: form.email,
          to_email: "gg.kallisti@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible!')
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
      alert('Uh oh... Something went wrong, Plese try again');
    })
  }



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  z-[1] '>
      <motion.div variants={slideIn("left", "tween", 0.5, 1.05)} className='flex-[0.75] bg-primary p-8 rounded-1xl ' >
      <p className={`${styles.sectionSubText}`}> Reach Out:  </p>
      <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
      <form className="mt-12 flex flex-col gap-6" 
      ref={formRef} onSubmit={handleSubmit} >

        <label className='flex flex-col'>
          <span className=" text-white font-medium mb-4 ">Name</span>
          <input className="bg-tertiary text-white py-4 px-6 placeholder:text-black-200 rounded-1xl outline-none border-none font-medium" 
          type="text" name="name" value={form.name} onChange={handleChange}
          placeholder="Your Name goes here" />
        </label>

        <label className='flex flex-col'>
          <span className=" text-white font-medium mb-4 ">Email</span>
           <input className="bg-tertiary text-white py-4 px-6 placeholder:text-black-200 rounded-1xl outline-none border-none font-medium" 
          type="email" name="email" value={form.email} onChange={handleChange}
          placeholder="Your Email goes here" />
        </label>

        <label className='flex flex-col'>
          <span className=" text-white font-medium mb-4 ">Message</span>
          <textarea rows='7'
          className="bg-tertiary text-white py-4 px-6 placeholder:text-black-200 rounded-1xl outline-none border-none font-medium" 
          name="message" value={form.message} onChange={handleChange}
          placeholder="What you want to say" />
        </label>
        <button type='submit' 
        className='bg-secondary text-black  py-4 px-5 outline-none rounded-1xl font-bold text-[22px] rounded-1xl '
         > {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
    <motion.div variants={slideIn("right", "tween", 0.5, 1.05)} 
   className='xl:flex-1 xl:h-auto xl:mt-0 md:h-[550px] h-[350px] '>
    <EarthCanvas/>
    </motion.div>

    </div>
  )
}


export default SectionWrapper(Contact, "contact");