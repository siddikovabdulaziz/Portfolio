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
        <div className='img-content'>
          <img src={portfolioImg} alt="" />
        </div>
        <div className='text-content'>
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
          <div className='iconLeft'><HiOutlineArrowLeft /></div>
          <div className='iconRight'> <HiOutlineArrowRight /></div>
        </div>

      </div>
    </div>
  )
}

export default Portfoliyo
