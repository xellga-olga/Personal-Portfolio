import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils.js";
import {CloudSun, Menu, X} from "lucide-react";

const navItems = [
  {
    name: "Home", href: "#hero"
  },
  {
    name: "About", href: "#about"
  },
  {
    name: "Skills", href: "#skills"
  },

  {
    name: "Projects", href: "#projects"
  },
  {
    name: "Mini Apps", href: "#mini-apps"
  },
  {
    name: "Contact", href: "#contact"
  }
]

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  useEffect(() => {
    const fetchWeather = () => {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data && data.name && data.main && typeof data.main.temp === "number") {
                setWeather({
                  temp: Math.round(data.main.temp),
                });
              }
            })
            .catch(() => {
            });
        },
        () => {
        }
      );
    };
    fetchWeather();
  }, [])


  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolling ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >

      <div className='container flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          {weather && (
            <span
              className="flex items-center  min-w-[40px] font-semibold text-center rounded-lg bg-[var(--weather-bg)] text-[var(--weather-color)] text-[16px] px-2 py-1 mr-4 shadow-lg ">
                  <CloudSun/>
              {weather.temp}°C
                </span>
          )}
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
        </div>


        {/*Desktop Nav*/}
        <div className='hidden md:flex space-x-12 items-center '>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-foreground/80 hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}

          <ThemeToggle className=''/>

        </div>

        {/*Mobile Nav*/}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;