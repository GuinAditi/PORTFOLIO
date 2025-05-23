
import React from 'react';
import c from '../assets/c.png';
import cplus from '../assets/cplus.png';
import flutter from '../assets/flutter.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

const skills = [
  { id: 1, image: c, title: 'C' },
  { id: 2, image: cplus, title: 'C++' },
  { id: 3, image: flutter, title: 'Flutter' },
  { id: 4, image: java, title: 'Java' },
  { id: 5, image: js, title: 'JavaScript' },
  { id: 6, image: react, title: 'React' },
];

const SkillBox = ({ image, title }) => (
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center mb-4'>
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
    </figure>
    <header>
      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
    </header>
  </article>
);

export default function Skills() {
  return (
    <section id="Skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
      <div data-aos="fade-up" data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
        <header>
          <h1 className='text-3xl sm:text-4xl font-bold'>
           SKILLS
          </h1>
         
        </header>

        <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 mt-4'>
          {skills.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
