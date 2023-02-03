import React from 'react';
import { ProjectData } from '../data/ProjectData';

const Work = () => {
  return (
    <div
      name='work'
      className='container mx-auto px-8 md:px-10 lg:px-24 my-24 max-w-[1160px] font-mono text-slate-200 md:h-screen'
    >
      <div className='flex w-full'>
        <h1
          className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
        >
          Projects
        </h1>
      </div>
      <div class='container grid justify-center grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 my-10 '>
        {ProjectData.map((project) => (
          <a
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            href={project.link}
            key={project.image}
            className='hover:bg-emerald-600 hover:bg-opacity-30 border-2 border-emerald-600 rounded '
          >
            <div className='md:max-w-none overflow-hidden'>
              <img
                alt='gallery'
                className='h-56 lg:h-60 w-full object-cover'
                src={project.image}
              />
              <div className='p-4  '>
                <h2 className='tracking-widest text-sm font-semibold text-emerald-600'>
                  {project.subtitle}
                </h2>
                <h1 className='text-xl tracking-widest font-medium text-white my-1'>
                  {project.title}
                </h1>
                <p className='leading-relaxed'>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
