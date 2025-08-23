import React from 'react';
import {Laptop, Layers, Sparkles} from "lucide-react";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className='py-24 px-4 relative'
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        {/*//right part */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <h3 className='text-3xl font-semibold'>
              Frontend Developer
            </h3>

            <p className='text-foreground/80'>
              I focus on frontend development with React, creating responsive and user-friendly interfaces.
              I enjoy turning ideas into polished, functional web applications.
            </p>

            <p className='text-foreground/80'>
              I constantly improve my skills through self-learning and hands-on projects,
              exploring modern tools and best practices in web development.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/*//left part*/}
          <div className='grid grid-cols-1 gap-4 '>

            {/* Skills */}
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary"/>
                </div>

                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Skills</h4>
                  <p className='text-foreground/80'>
                    Working with React JS and modern web technologies to build responsive and interactive user interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary"/>
                </div>

                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Motivation</h4>
                  <p className='text-foreground/80'>
                    Passionate about frontend development and driven by the idea of creating clean, user-friendly designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary"/>
                </div>

                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Projects</h4>
                  <p className='text-foreground/70'>
                    Developing personal projects to practice skills and bring ideas to life as real web applications.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;