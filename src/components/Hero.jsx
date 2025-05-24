import React from 'react';
import Navbar from './Navbar';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import my from '../assets/my.jpg';
import Resume from '../assets/Resume.pdf';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center pt-10 sm:pt-30 bg-[#0d0d0d]'>

      {/* Enhanced Gradient Div */}
      <div className='hidden md:block md:h-[550px] md:w-[450px] bg-gradient-to-br from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute transform rotate-45 z-0 right-2 top-28 rounded-3xl blur-xl opacity-80'></div>

      <Navbar />

      <main
        id="home"
        className='scroll-mt-[100px] flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-8 md:pb-24 md:pt-20 pt-12 mt-14 md:mt-0 z-10'
      >
        <section className='flex-1 md:mr-28 md:text-left text-center mt-10 md:mt-0 relative' data-aos='fade-up' data-aos-delay="500">

          {/* Blurred circle */}
          <div className='absolute -z-10 w-40 h-40 bg-[#cd3cff] rounded-full blur-3xl opacity-40 -top-3 -left-8 md:w-60 md:h-60 md:-top-5 md:-left-12'></div>

          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]'>
              Aditi Guin
            </h1>
            <h2 className='text-lg sm:text-2xl md:text-3xl font-bold text-[#c744ec] mb-2 drop-shadow-md'>
              Developer
            </h2>
          </header>

          <p className='text-sm sm:text-base md:text-lg text-gray-200 mb-4 px-2 md:px-0'>
            I'm a passionate tech enthusiast driven by curiosity and a constant desire to learn and innovate. From exploring the latest in web development to diving deep into emerging technologies like AI and blockchain, I thrive on solving problems and building solutions that make a real impact. Technology isn't just my career—it's my craft, my hobby, and my way of contributing to a smarter, more connected world.
          </p>

          {/* Highlight Skills */}
          

          {/* Social Links with hover effects */}
          <div className='flex items-center justify-center md:justify-start space-x-4 mb-6'>
            <a href="https://www.linkedin.com/in/aditiguin/" aria-label="LinkedIn">
              <img src={linkedin} alt='LinkedIn' className='w-9 h-9 sm:w-11 sm:h-11 hover:scale-110 transition-transform duration-200 hover:shadow-[0_0_10px_#0e76a8]' />
            </a>
            <a href="https://github.com/GuinAditi" aria-label="GitHub">
              <img src={github} alt='GitHub' className='w-9 h-9 sm:w-11 sm:h-11 hover:scale-110 transition-transform duration-200 hover:shadow-[0_0_10px_#6e5494]' />
            </a>
          </div>

          {/* Resume Button with hover effect */}
          <a href={Resume} download>
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-base sm:text-lg mx-auto md:mx-0 transition-all duration-300'>
              Download Resume
            </button>
          </a>
        
        </section>

        {/* Profile Image */}
        <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-6 md:mt-0'>
          <img
            src={my}
            alt="profile"
            className='h-64 w-64 sm:h-[400px] sm:w-[400px] object-cover rounded-full border-4 border-white shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow duration-300'
          />
        </figure>
      </main>
    </div>
  );
}
