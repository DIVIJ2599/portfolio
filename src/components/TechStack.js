import React from 'react'
import { techStack } from '../data/TechData'

const TechStack = () => {
  return (
    <div
      name='about'
      className='container flex flex-col md:flex-col md:justify-start justify-between items-center mx-auto px-8 py-10 md:px-10 lg:px-20 md:h-screen max-w-[1160px] font-mono text-slate-200 gap-8 my-24'
    >
      <div className='flex w-full'>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
          className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
        >
          Tech Stack
        </h1>
        </div>
        <div className='w-full flex gap-12 flex-wrap'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='150'
        data-aos-once='true'
        >
        {techStack.map((data,idx)=>
        <div className='flex flex-col justify-center items-center icons'>
            <img height='120px' width="120px" key={data.title} src={data.src} alt={data.alt} />
            <p key={idx}>{data.title}</p>
        </div>
        )}
        </div>
    </div>
  )
}

export default TechStack