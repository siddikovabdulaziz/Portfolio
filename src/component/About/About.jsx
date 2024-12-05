import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import img1 from './Group 5 (1).png';
import img2 from './photo_2021-08-30_22-31-34.png';
import img3 from './Group 4 (1).png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='about-container' id='About-me'>
      <div className='circles-section'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </div>
      <div className='text-section'    data-aos="zoom-in-up">
        <div className='theme'>ABOUT ME</div>
        Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
        By trusting me, you will get the maximum return for your project, save your nerves and time. If you are interested in me, you want to know something more or use my services, then I will provide all my contacts below.
      </div>
      <div className='img-section'>
        <div className='img1'data-aos="fade-right">
          <img src={img1} alt='' />
        </div>
        <div className='img2'  data-aos="fade-left">
          <img src={img2} alt='' />
        </div>
        <div className='img3' data-aos="fade-right">
          <img src={img3} alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;
