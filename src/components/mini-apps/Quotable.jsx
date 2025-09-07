import React, {useEffect, useState} from 'react';
import {ArrowRight, Heart, LogOut, } from 'lucide-react';

import {Link} from "react-router-dom";
import Modal from "@/components/mini-apps/Modal.jsx";


const Quotable = () => {
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  console.log(data, 'data')

  function refreshPage() {
    window.location.reload();
  }

  const handleCopyToLocalStorage = () => {
    const dataString = JSON.stringify(data);
    localStorage.setItem('copy', JSON.stringify(dataString));
    console.log('Quotable copied to local storage');
  }

  const handleFavoriteToLocalStorage = () => {
    const dataString = JSON.stringify(data);
    localStorage.setItem('favorites', JSON.stringify(dataString));
    console.log('Quotable save in favorite to local storage');
  }

  return (
    <section className='py-24 px-4 relative  '>

      <div className='container mx-auto max-w-3xl'>
        <div className='border border-gray-300 rounded-lg shadow-xl'>

          <div className='flex items-center justify-around'>
            <div className="">
              <Link to="/#mini-apps">
                <button
                  aria-label="Back to Mini Apps"
                >
                  <LogOut className="w-5 h-5 cursolr-pointer transform scale-x-[-1]"/>
                </button>
              </Link>
            </div>

            <h2 className="text-center text-3xl font-bold mb-4 md:text-4xl p-6">
              Idea of the Day
            </h2>


            <div className="">
              <button
                onClick={() => setOpenModal(true)}
              >
                <Heart className="w-5 h-5 cursor-pointer"/>
              </button>

              <Modal open={openModal} onClose={() => {
                setOpenModal(false)
              }}>
              </Modal>
            </div>
          </div>


          <p className="text-xl text-foreground/80 mt-6 font-fancy p-4">
            {data.content}
          </p>

          <p className="text-lg text-foreground/80 mt-8  font-fancy italic ">
            - {data.author}
          </p>

          <div className='grid items-center justify-center gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3 p-4'>
            <button
              onClick={handleCopyToLocalStorage}
              className='border cursor-pointer border-gray-300 rounded-lg shadow-xl pl-10 pr-10 pt-3 pb-3'>
              Copy
            </button>
            <button
              onClick={handleFavoriteToLocalStorage}
              className='border cursor-pointer border-gray-300 rounded-lg shadow-xl pl-10 pr-10 pt-3 pb-3'>
              Favorite
            </button>
            <button
              onClick={refreshPage}
              className='border justify-center cursor-pointer border-gray-300 rounded-lg shadow-xl pl-10 pr-10 pt-3 pb-3 flex gap-2 items-center'>
              Next <ArrowRight size={16}/>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quotable;