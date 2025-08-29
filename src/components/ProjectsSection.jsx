import React from 'react';
import {ArrowRight, ExternalLink, Github} from "lucide-react";
import {motion} from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Fruits-Shop",
    description: "A visual concept of an online fruit store with a modern and stylish design, smooth motion effects, and a user-friendly interface for an engaging shopping experience.",
    image: "/projects/project1.png",
    tags: ["ReactJS", "TailwindCSS", "Vite", "Framer-motion", "React Icons"],
    demoUrl: "https://fruits-shop-six.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Fruits-Shop",
  },
  {
    id: 2,
    title: "E-SHOP",
    description: "An online store where users can search for items by name, add products to the cart, adjust quantities or remove them, and place an order with the total amount calculated.",
    image: "/projects/project2.png",
    tags: ["ReactJS", "TailwindCSS", "Redux Toolkit", "React Router", "React Icons", "Vite"],
    demoUrl: "https://e-shop-kappa.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/e-shop",
  },
  {
    id: 3,
    title: "E-commerce-Inly",
    description: "An online clothing store where users can browse the catalog, select items in the desired size, add them to the cart, and place an order with the total amount calculated.",
    image: "/projects/project3.png",
    tags: ["ReactJS", "TailwindCSS", "React Router", "React-Toastify", "Vite"],
    demoUrl: "https://e-commerce-inly.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/E-commerce-Inly-",
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2
          className='text-center text-3xl font-bold mb-4 md:text-4xl'>
          Featured
          <span className='text-primary'>
          {" "}Projects
          </span>
        </h2>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          These are some projects I’ve worked on. <br/>
          I focused on making them simple, user-friendly, and practical.
        </p>

        {/* project cards with tags and links */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((item, index) => (
            <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-sm card-hover'>

              <div className='overflow-hidden h-48'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>

              <div className='p-4'>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs font-medium border py-1 px-2 rounded-full bg-primary/20 text-secondary-foreground'>
                      {tag}
                    </span>
                  ))}
                </div>


                <h3 className='text-xl mb-1 font-semibild'>{item.title}</h3>

                <p className='text-sm mb-4 text-foreground/80'>{item.description}</p>

                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a target='_blank' href={item.demoUrl}
                       className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <ExternalLink size={20}/>
                    </a>
                    <a target='_blank' href={item.githubUrl}
                       className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/*  button  */}
        <div className='mt-12 text-center'>
          <a
            href='https://github.com/xellga-olga/Personal-Portfolio'
            target='_blank'
            className='cosmic-button w-fit flex items-center gap-2 mx-auto'>
            Check My GitHub
            <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;