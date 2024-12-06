import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
  const transition = {type:"spring",duration:3};
  const [selected, setSelected] = useState(0); // Move useState inside the component
  const tlength = testimonialsData.length;

  const handleLeftArrow = () => {
    setSelected((prevSelected) => (prevSelected === 0 ? tlength - 1 : prevSelected - 1));
  };

  const handleRightArrow = () => {
    setSelected((prevSelected) => (prevSelected === tlength - 1 ? 0 : prevSelected + 1));
  };

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}

>{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div></div>
      <div></div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial = {{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        
        
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt="Left Arrow"
            onClick={handleLeftArrow} // Add click handler for left arrow
          />
          <img
            src={RightArrow}
            alt="Right Arrow"
            onClick={handleRightArrow} // Add click handler for right arrow
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
