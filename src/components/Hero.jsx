

import React from 'react';
import Navbar from './Navbar';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import my from '../assets/my.jpg';
import Resume from '../assets/Resume.pdf'; 

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center pt-20'>
  
      <div className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>

      <Navbar />

      <main
        id="home"
        className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-20 pt-24 mt-14 md:mt-0 z-10'
      >
      
        <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos='fade-up' data-aos-delay="500">
       
          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cff] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>

          <header>
            <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
              Aditi Guin
            </h1>
            <h2 className='text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2'>
              Developer
            </h2>
          </header>

          <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
           I'm a passionate tech enthusiast driven by curiosity and a constant desire to learn and innovate. From exploring the latest in web development to diving deep into emerging technologies like AI and blockchain, I thrive on solving problems and building solutions that make a real impact. Technology isn't just my career—it's my craft, my hobby, and my way of contributing to a smarter, more connected world.
          </p>

        
          <div className='flex items-center space-x-4 mb-6'>
            <a href="#">
              <img src={linkedin} alt='LinkedIn' className='w-11 h-11' />
            </a>
            <a href="#">
              <img src={github} alt='GitHub' className='w-11 h-11' />
            </a>
          </div>

         
          
          <a href={Resume} download>
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
              Download Resume
            </button>
          </a>
         
        </section>

     
        <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0'>
          <img
            src={my}
            alt="profile"
            className='h-[400px] w-[400px] object-cover rounded-full border-4 border-white shadow-lg'
          />
        </figure>
      </main>
    </div>
  );
}
