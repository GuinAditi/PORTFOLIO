// // import React from 'react'
// // import project1 from '../assets/project1.jpg'; // Adjust the path as needed

// // const ProjectCard=({image,title,desc,link})=>{
// //     return(
// //         <article className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group'>
// //             <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'>

// //             </div>
// //             <div className='relative z-10'>
// //                 <figure className='relative'>
// //                     <img src={image} alt={title} className='w-full h-48 object-cover transition-transform suration-300 group-hover:scale-110'/>
// //                     <a href={link} target='_blank' rel="noopener noreffer" className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
// //                         <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>Live Preview</button>

// //                     </a>
// //                 </figure>
// //                 <div className='px-6 py-4'>
// //                     <header>
// //                         <h3 className='text-white font-bold text-xl nb-2'>{title}</h3>
// //                     </header>
// //                     <p className='text-gray-200 text-base'>{desc}</p>
// //                 </div>
// //             </div>
// //         </article>
// //     )
// // }





// // export default function Project(){
   
// //     const listProjects=[
// //         {
// //             image:project1,
// //             title:'abc',
// //             desc:'aaa',
// //             link:''
// //         },
// //          {
// //             image:project2,
// //             title:'abc',
// //             desc:'aaa',
// //             link:''
// //         },
// //          {
// //             image:project3,
// //             title:'abc',
// //             desc:'aaa',
// //             link:''
// //         },
// //          {
// //             image:project4,
// //             title:'abc',
// //             desc:'aaa',
// //             link:''
// //         },
// //     ];

    

// //     return(
// //        <main className='p-4'>
// //         <section data-aos='fade-up' data-aos-delays='300'>
// //             <header className='text-cente'r>
// //                 <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
// //                     My<span className='text-purple-400'>Projects</span>
// //                 </h1>
// //                 <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>Lorem, ipsum doipit eligendi.</p>

// //             </header>

// //         </section>
// //         <section data-aos='fade-up' data-aos-delays='500' className='flex flex-wrap gap-4 justify-center mt-6'>
// //             {listProjects.map((project,index)=>(
// //                 <ProjectCard
// //                 key={index}
// //                 image={project.image}
// //                 title={project.title}
// //                 desc={project.desc}
// //                 link={project.link}
// //                 />
// //             ))}

// //         </section>
// //        </main>
// //     )
// // }

// import React from 'react';

// const ProjectCard = ({ image, title, desc, link }) => {
//   return (
//     <article className='relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl transition-transform hover:scale-105 duration-300'>
//       <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>
//       <div className='relative z-10'>
//         <figure className='relative'>
//           <img
//             src={image}
//             alt={title}
//             className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
//           />
//           <a
//             href={link}
//             target='_blank'
//             rel='noopener noreferrer'
//             className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
//           >
//             <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
//               Live Preview
//             </button>
//           </a>
//         </figure>
//         <div className='px-6 py-4'>
//           <header>
//             <h3 className='text-lg sm:text-xl font-semibold text-white mb-2'>{title}</h3>
//           </header>
//           <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>{desc}</p>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default function Project() {
//   const listProjects = [
//     {
//       image: 'https://via.placeholder.com/300x200',
//       title: 'Portfolio Website',
//       desc: 'A personal portfolio built using React and Tailwind CSS.',
//       link: 'https://example.com/project1',
//     },
//     {
//       image: 'https://via.placeholder.com/300x200',
//       title: 'E-commerce App',
//       desc: 'An online store built with Next.js and Stripe integration.',
//       link: 'https://example.com/project2',
//     },
//     {
//       image: 'https://via.placeholder.com/300x200',
//       title: 'Blog Platform',
//       desc: 'A full-stack blogging platform with authentication and CMS.',
//       link: 'https://example.com/project3',
//     },
   
//   ];

//   return (
//     <main className='p-4'>
//       <section id='Project' className='scroll-mt-[200px]' data-aos='fade-up' data-aos-delay='300'>
//         <header className='text-center'>
//           <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
//             My <span className='text-purple-400'>Projects</span>
//           </h1>
//           <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
//             A collection of recent works and personal experiments.
//           </p>
//         </header>
//       </section>

//       <section
//         data-aos='fade-up'
//         data-aos-delay='500'
//         className='flex flex-wrap gap-4 justify-center mt-6'
//       >
//         {listProjects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             image={project.image}
//             title={project.title}
//             desc={project.desc}
//             link={project.link}
//           />
//         ))}
//       </section>
//     </main>
//   );
// }







import React from 'react';
import portfolio from '../assets/portfolio.png';

const ProjectCard = ({ image, title, desc, link, tags = [] }) => {
  return (
    <article className="bg-[#3a2e44] text-white rounded-xl overflow-hidden shadow-lg p-4 flex flex-col transition-transform duration-300 hover:scale-105 relative group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-purple-500/30 via-purple-600/40 to-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
        >
          <button className="bg-white text-black py-2 px-4 rounded-3xl shadow-md transition duration-300 hover:bg-purple-600 hover:text-white">
            Live Preview
          </button>
        </a>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{desc}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-700 text-white text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

  
      </div>
    </article>
  );
};

export default function Project() {
  const listProjects = [
    {
      image: portfolio,
      title: 'Portfolio Website',
      desc: 'A personal portfolio built using React and Tailwind CSS.',
      link: 'https://portfolio-guinaditis-projects.vercel.app',
      tags: ['React', 'Tailwind'],
    },
    {
      image: 'https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
      title: 'XYZ',
      desc: 'An online store built with Next.js and Stripe integration.',
      link: 'https://example.com/project2',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
    },
  ];

  return (
    <main className="p-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <section id="Project" className="text-center mb-8 scroll-mt-[200px]" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-3xl text-white sm:text-4xl font-bold">
            My <span className="text-purple-400">Projects</span>
          </h1>
        </section>

        <section
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 place-items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {listProjects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={300 + index * 100}>
              <ProjectCard {...project} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
