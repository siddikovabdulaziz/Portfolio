import React from 'react'
import "./Portfoliyo.css"
import portfolioImg from "./image 4 (1).png"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";


const Portfoliyo = () => {
  return (
    <div id='Portfolio' className='Portfolio'>
      <h1>PORTFOLIO</h1>

      <div className='portfolio-container'>
        <div className='img-content' data-aos="zoom-in-up">
          <img src={portfolioImg} alt="" />
        </div>
        <div className='text-content' data-aos="fade-up">
          <h6>Landing Ice-cream</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec ut orci eu elit consequat posuere ut sed
            elit. Nulla et tristique felis. Morbi quis orci non
            purus blandit fringilla. Etiam et mollis eros.
            Duis venenatis vulputate lacus, non tristique
            eros placerat vel. Nam nec magna lacus. Etiam
            euismod egestas mauris nec mollis. Phasellus
            efficitur et ex vel condimentum. Cras enim purus,
            tempor sed massa vel, accumsan bibendum magna.
            Nullam hendrerit cursus purus, sit amet viverra
            rcu gravida vel. <br />
            <span className='port-span'><a href="#">More  </a><MdOutlineArrowRightAlt /></span></p>
        </div>

        <div className='icons'>
          <div className='iconLeft' data-aos="fade-left"><HiOutlineArrowLeft /></div>
          <div className='iconRight' data-aos="fade-right"> <HiOutlineArrowRight /></div>
        </div>

      </div>
    </div>
  )
}

export default Portfoliyo
