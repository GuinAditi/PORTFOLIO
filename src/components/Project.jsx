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
