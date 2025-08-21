import React from 'react';
import {ArrowUp} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-8 px-4 container bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
        <a
          href='#hero'
          className='text-xl font-bold text-primary flex items-center'>
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>
              OlyaPla{" "}
            </span>
             Portfolio
          </span>
        </a>
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20}/>
        </a>
    </footer>
);
};

export default Footer;