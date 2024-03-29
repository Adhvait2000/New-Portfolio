import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" 
        >
          <img src={icon} alr={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt> 
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a computing undergraduate at Nanyang Technological Univeristy (NTU). I am interested in software engineering, artificial intelligence, and frontend development. 
        I have experience of working with people and, I am someone who is always seeking to learn and develop. 
        Outside of studies I keep myself fit and active and I am a positive person who always embraces change. 
        You can find my <a href='https://docs.google.com/document/d/1T3pA4qhpY7nWtOnQR81uIAFm-75kqEG_/edit' className='link-style' target="_blank" rel="noopener noreferrer">Resume</a> and <a href='https://www.linkedin.com/in/adhvait-srinath-3653b9252/' className='link-style' target="_blank" rel="noopener noreferrer">LinkedIn profile</a> here.
      </motion.p>

      <style>
        {`
          .link-style{
            text-decoration: underline; 
            font-weight: bold;
          }
        `}
      </style>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index = {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")