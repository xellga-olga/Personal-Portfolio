import React from 'react';

const projects = [
  {
    id: 1,
    title: "Fruits-Shop",
    description: "E-commerce website selling fruits.",
    image: "/projects/project1.png",
    tags: ["ReactJS", "TailwindCSS", "Framer-motion"],
    demoUrl: "https://fruits-shop-six.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Fruits-Shop",
  },
  {
    id: 2,
    title: "E-SHOP",
    description: "An online store where users can search for items by name, add products to the cart, adjust quantities or remove them, and place an order with the total amount calculated.",
    image: "/projects/project2.png",
    tags: ["ReactJS", "TailwindCSS", "Redux Toolkit"],
    demoUrl: "https://e-shop-kappa.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/e-shop",
  },
  {
    id: 3,
    title: "E-commerce-Inly",
    description: "An online clothing store where users can browse the catalog, select items in the desired size, add them to the cart, and place an order with the total amount calculated.",
    image: "/projects/project3.png",
    tags: ["ReactJS", "TailwindCSS"],
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
          These are some projects I’ve worked on. I focused on making them simple, user-friendly, and practical.
        </p>


      </div>
    </section>
  );
};

export default ProjectsSection;