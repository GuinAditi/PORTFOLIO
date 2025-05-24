
import React from 'react'
import group from '../assets/group.png';

export default function About() {
  return (
    <section id="about" className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 bg-[#0d0d0d]'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>

        {/* Image Section */}
        <figure data-aos='fade-up' data-aos-delay='500' className='flex justify-center lg:justify-end'>
          <img
            src={group}
            alt="tech"
            className='h-[400px] w-[400px] object-cover rounded-full border-4 border-white shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-shadow duration-300 animate-float'
          />
        </figure>

        {/* Text Section */}
        <article data-aos="fade-left" data-aos-delay='500' className='relative text-center lg:text-left'>
          <div className='absolute z-[-1] w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 top-0 left-0'></div>

          <header>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
              About Me
            </h1>
          </header>

          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
            I'm a passionate and driven developer with a deep curiosity for technology and innovation. My journey began with core languages like C++ and Java, and has grown to include modern tools like React, Flutter, and blockchain development. I thrive in solving problems, building scalable solutions, and constantly pushing my limits to learn and grow. Whether it's frontend finesse or backend logic, I believe in crafting user-centric, impactful digital experiences.
          </p>

          <blockquote className="italic text-sm sm:text-base text-purple-300 mt-4">
            "Building more than just code — crafting experiences that connect people."
          </blockquote>
        </article>
      </div>
    </section>
  );
}
