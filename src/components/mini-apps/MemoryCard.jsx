import React, {useState, useEffect} from 'react';
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

  const [cards, setCards] = useState(() => _.shuffle(cardImages).map(c => ({...c, matched: false})));

  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  const handleChoice = (card, index) => {
    if (disabled) return;
    if (choiceOne?.index === index) return;
    if (cards[index].matched) return;

    if (!choiceOne) {
      setChoiceOne({...card, index});
    } else if (!choiceTwo) {
      setChoiceTwo({...card, index});
    } else {
      setChoiceOne({...card, index});
      setChoiceTwo(null);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      const isMatch = choiceOne.url === choiceTwo.url;

      if (isMatch) {
        setCards(prev =>
          prev.map((c, i) => (i === choiceOne.index || i === choiceTwo.index) ? {...c, matched: true} : c)
        );
        setScore(prev => prev + 1);
        setTimeout(() => {
          resetTurn();
        }, 500);
      } else {
        setTimeout(() => {
          resetTurn();
        }, 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  const isFlipped = (index) => {
    return cards[index].matched || choiceOne?.index === index || choiceTwo?.index === index;
  };

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
          <p className='text-xl text-primary'>Score: {score}</p>
          <p className='font-extrabold text-xl cursor-pointer text-primary text-salt'>PLAY</p>

          <button
            className='cosmic-button cursor-pointer'
            onClick={() => {
              setCards(_.shuffle(cardImages).map(c => ({...c, matched: false})));
              setChoiceOne(null);
              setChoiceTwo(null);
              setScore(0);
              setDisabled(false);
            }}
          >
            RESET
          </button>
        </div>

        {cards.length > 0 && cards.every(c => c.matched) && (
          <div className="mt-4 text-center text-green-500 font-semibold">You win! 🎉</div>
        )}

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 place-items-center max-w-2xl mx-auto mt-8">
          {cards.map((img, id) => (
            <div
              key={id}
              onClick={() => handleChoice(img, id)}
              aria-disabled={disabled}
              className={`relative bg-card card-hover gradient-border w-full aspect-square rounded-lg overflow-hidden ${disabled ? 'pointer-events-none opacity-90' : ''}`}
            >
              {isFlipped(id) ? (
                <img src={img.url} alt="card" className="w-full h-full object-cover rounded-lg"/>
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-3xl font-bold select-none">
                  ?
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MemoryCard;