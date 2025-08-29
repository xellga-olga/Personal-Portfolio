import React from 'react';
import {ArrowDown} from "lucide-react";
import HeroImage from '../img/heroImage.jpg'

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='flex flex-col justify-center items-center relative min-h-screen px-5 gap-6'
    >
      <div className="mt-16 md:mt-0 p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-400 transition-all duration-500">
        <img
          className="rounded-full h-[180px] w-[180px] md:h-[250px] md:w-[250px] object-cover"
          src={HeroImage}
          alt="hero image"
        />
      </div>
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>

          <h1 className='text-4xl md:text-6xl font-bold trackikng-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
            <span className='text-primary opacity-10 animate-fade-in-delay-1'> Olha</span>
            <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Plakhotnikova</span>
          </h1>

          <p className='opacity-0 animate-fade-in-delay-3 text-lg md:text-xl text-muted-forefround max-2-2xl mx-auto'>
            I'm a junior React.js developer creating beautiful and user-friendly web applications.
          </p>

          <div>
            <a href='#projects' className='opacity-0 animate-fade-in-delay-4 cosmic-button pt-2'>
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 flex flex-col items-center animate-bounce transform -translate-x-1/2'>
        <span className='text-sm mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary'/>
      </div>
    </section>
  );
};

export default HeroSection;