import React from 'react';
import {FacebookIcon, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone, Send} from "lucide-react";
import {cn} from "@/lib/utils.js";
import {useToast} from "@/hooks/use-toast.jsx";

const ContactSection = () => {

  const {toast} = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for submitting your message.",
      })
    }, 500)
  }

  return (
    <section
      id='contact'
      className='relative py-24 px-4 bg-secondary/30 '
    >
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-pprimary'> Touch</span>
        </h2>

        <p className='text-center text-foreground/80 mb-12 mx-auto max-w-2xl'>
          Open to learning, teamwork, and new opportunities
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/*contact information*/}
          <div className='space-y-8'>
            <h3 className='mb-6 font-semibold text-2xl'>
              Contact Information
            </h3>

            <div className='space-y-6 justify-center'>
              {/*mail section*/}
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className="text-primary h-6 w-6"/>
                </div>

                <div>
                  <h4 className='font-medium'> Email</h4>
                  <a href='mailto:olya.pla47@gmail.com'
                     className='text-foreground hover:text-primary transition-colors'>
                    olya.pla47@gmail.com
                  </a>
                </div>
              </div>

              {/*phone section*/}
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className="text-primary h-6 w-6"/>
                </div>

                <div>
                  <h4 className='font-medium'> Phone</h4>
                  <a href='tel:+380509077560'
                     className='text-foreground hover:text-primary transition-colors'>
                    +380 50 907 75 60
                  </a>
                </div>
              </div>

              {/*location section*/}
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className="text-primary h-6 w-6"/>
                </div>

                <div>
                  <h4 className='font-medium'> Location</h4>
                  <a
                    className='text-foreground hover:text-primary transition-colors'>
                    Budapest, Hungary
                  </a>
                </div>
              </div>

            </div>

            <div className='pt-8'>
              <h4 className='mb-4 font-medium'>Connect With Me</h4>
              <div className='flex justify-center space-x-4'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <FacebookIcon/>
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon/>
                </a>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  <LinkedinIcon/>
                </a>
              </div>
            </div>
          </div>

          {/*contact form*/}
          <div onSubmit={handleSubmit} className='bg-card p-4 rounded-lg shadow-xs'>
            <h3 className='text-2xl mb-6 font-semibold '>Send a Message</h3>

            <form className='space-y-6'>
              <div>
                <label
                  className='font-medium mb-2 text-sm block'
                  htmlFor='name'>
                  Your Name:
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  required
                  className='border border-input w-full px-4 py-3 rounded-md bg-background focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                />
              </div>

              <div>
                <label
                  className='font-medium mb-2 text-sm block'
                  htmlFor='email'>
                  Your Email:
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  required
                  className='border border-input w-full px-4 py-3 rounded-md bg-background focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                />
              </div>

              <div>
                <label
                  className='font-medium mb-2 text-sm block'
                  htmlFor='message'>
                  Your Message:
                </label>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Type your message here..'
                  required
                  className='resize-none border border-input w-full px-4 py-3 rounded-md bg-background focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                />
              </div>

              <button type='submit' className={cn('cosmic-button w-full flex items-center justify-center gap-2')}>
                Send Message
                <Send size={16}/>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;