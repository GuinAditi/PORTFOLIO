import React from 'react'
import my from '../assets/my.jpg';

export default function About(){
    return(
       <section id="about" className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
           <figure data-aos='fade-up' data-aos-delay='500' className='flex-1 flex justify-center md:justify-end mt-0'>
                     <img
                       src={my}
                       alt="profile"
                       className='h-[400px] w-[400px] object-cover rounded-full border-4 border-white shadow-lg'
                     />
                   </figure>
                   <article data-aos="fade-left" data-aos-delay='500' className='text-center lg:text-left-relative'>
                    <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
                    <header>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>About Me</h1>
                    </header>
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo sunt architecto voluptate voluptas adipisci quos exercitationem, minus vero temporibus magni natus! Consectetur optio aperiam excepturi et officia consequatur recusandae.

                    </p>
                    <footer>
                        <button className='inline-flex text-white border-3 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounder-full text-sm sm:text-lg'>
                            Learn More
                        </button>
                    </footer>
                   </article>
        </div>


       </section>
    )
}