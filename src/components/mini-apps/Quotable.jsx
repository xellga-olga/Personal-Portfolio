import React, {useEffect, useState} from 'react';
import {ArrowRight, Heart, LogOut,} from 'lucide-react';

import {Link} from "react-router-dom";
import Modal from "@/components/mini-apps/Modal.jsx";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Quotable = () => {
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState([]);


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
    localStorage.setItem('copy', JSON.stringify(data))
    console.log('Quotable copied to local storage');
  }

  const handleFavoriteToLocalStorage = () => {
    const updatedFavorites = [...favorites, data];//добавляем текущую цитату
    setFavorites(updatedFavorites);//обновляем состояние
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setOpenModal(true);
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


              <Modal open={openModal} onClose={() => {setOpenModal(false)}}>
                {favorites.length === 0 ? (
                  <p>Пусто</p>
                ) : (
                  <ul className="">
                    {favorites.map((item, index) => (
                      <li key={index} className='mb-4 p-6'>
                        <p className='font-fancy'>{item.content}</p>
                        <p className='italic'>{item.author}</p>
                        <button className='cursor-pointer mt-4 py-2.5 px-6 text-sm bg-red-50 text-red-500 rounded-full font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-100'>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Modal>

            </div>
          </div>

          <SkeletonTheme baseColor='#dbd0d0'>
            {
              loading ? (
                <>
                  <Skeleton height={28} width='80%'/>
                  <Skeleton height={20} width='50%' style={{marginTop: 20}}/>
                </>
              ) : (
                <>
                  <p className="text-xl text-foreground/80 mt-6 font-fancy p-4">
                    {data.content || <Skeleton count={2}/>}
                  </p>

                  <p className="text-lg text-foreground/80 mt-8  font-fancy italic ">
                    - {data.author || <Skeleton count={1}/>}
                  </p>
                </>
              )
            }
          </SkeletonTheme>

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