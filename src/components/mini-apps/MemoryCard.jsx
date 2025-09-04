import React, {useState} from 'react';
import _ from 'lodash';

import img1 from '../../../public/memory_card_1.jpg'
import img2 from '../../../public/memory_card_2.jpg'
import img3 from '../../../public/memory_card_3.jpg'
import img4 from '../../../public/memory_card_4.jpg'
import img5 from '../../../public/memory_card_5.jpg'
import img6 from '../../../public/memory_card_6.jpg'

import {LogOut} from "lucide-react";
import {Link} from "react-router-dom";

const cardImages = [
  {
    id: 1,
    url: img1
  },
  {
    id: 2,
    url: img2
  },
  {
    id: 3,
    url: img3
  },
  {
    id: 4,
    url: img4
  },
  {
    id: 5,
    url: img5
  },
  {
    id: 6,
    url: img6
  },
  {
    id: 7,
    url: img1
  },
  {
    id: 8,
    url: img2
  },
  {
    id: 9,
    url: img3
  },
  {
    id: 10,
    url: img4
  },
  {
    id: 11,
    url: img5
  },
  {
    id: 12,
    url: img6
  },
]

const MemoryCard = () => {

  const [cards, setCards] = useState(() => _.shuffle(cardImages));

  return (
    <section className='py-24 px-4 relative'>
      <div className="container mx-auto max-w-5xl">

        <div className="flex flex-row justify-center gap-3">
          <Link to="/#mini-apps">
            <button
              aria-label="Back to Mini Apps"
              className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border bg-card hover:bg-card/80 active:scale-95 transition text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <LogOut className="w-5 h-5 transform scale-x-[-1]"/>
            </button>
          </Link>
          <h1 className='text-center text-3xl md:text-4xl font-bold mb-4 text-glow'>ZEBRA MEMORY CARD</h1>
        </div>


        <div className='flex flex-row m-3 justify-evenly items-center'>
          <p className='text-xl text-primary'>Score: 0</p>
          <p className='font-extrabold text-xl cursor-pointer text-primary text-salt'>PLAY</p>

          <button
            className='cosmic-button cursor-pointer'
            onClick={() => setCards(_.shuffle(cardImages))}
          >
            RESET
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center max-w-2xl mx-auto mt-8">
          {cards.map((img, id) => (
            <div
              key={id}
              className="bg-card card-hover gradient-border w-full aspect-square rounded-lg overflow-hidden"
            >
              <img src={img.url} alt="card" className="w-full h-full object-cover rounded-lg"/>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MemoryCard;