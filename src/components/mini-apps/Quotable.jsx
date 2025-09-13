import React, {useEffect, useState} from 'react';
import {ArrowRight, Heart, LogOut,} from 'lucide-react';

import {Link} from "react-router-dom";
import Modal from "@/components/mini-apps/Modal.jsx";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {useCopyToClipboard} from "usehooks-ts";
import {CheckIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline";


const Quotable = () => {
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [favorites, setFavorites] = useState([]);

  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false); //состояние для копирования цитаты

  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('favorites') !== null) {
      setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }

    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  /*useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);*/


  console.log(data, 'data')


  function refreshPage() {
    setFavorited(false);
    window.location.reload();
  }

  const handleCopyToLocalStorage = () => {
    localStorage.setItem('copy', JSON.stringify(data))
    console.log('Quotable copied to local storage');

    copy(`${data.content} - ${data.author}`)
    setCopied(true);
  }

  const handleFavoriteToLocalStorage = () => {
    //есть ли текущая цитата (data) уже в массиве favorites
    const existingFavorites = favorites.some(item => item._id === data._id)
    // Если existingFavorites === false, значит такой цитаты ещё нет → выполняется блок if.
    if (!existingFavorites) {
      const updatedFavorites = [...favorites, data];//добавляем текущую цитату
      setFavorites(updatedFavorites);//обновляем состояние(мода-лка покажет новую цитату).
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));//Записываем тот же массив в localStorage,
      // чтобы сохранить данные между перезагрузками.
      console.log('Quote saved in favorites');
      setFavorited(true) //показываем "Added"
    } else {
      console.log('Quote already in favorites');
    }
  }

  const handleDeleteFavorite = (idToRemove) => {
    setFavorites(items => items.filter(item => item._id !== idToRemove));
  }


  return (
    <section className='py-24 px-4 relative  '>

      <div className='container mx-auto max-w-3xl'>
        <div className='border border-gray-300 rounded-lg shadow-2xl shadow-blue-500/50 '>

          <div className='flex items-center justify-around'>
            <div className="">
              <Link to="/#mini-apps">
                <button
                  aria-label="Back to Mini Apps"
                >
                  <LogOut
                    className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in-out scale-x-[-1] hover:translate-x-1"/>
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
                <Heart
                  className="w-5 h-5 cursor-pointer  transition-transform duration-300 ease-in-out scale-x-[-1] hover:rotate-360"/>
              </button>


              <Modal open={openModal} onClose={() => {
                setOpenModal(false)
              }}>
                {favorites.length === 0 ? (
                  <p className='font-fancy lg:text-2xl md:text-xl '>Empty!</p>
                ) : (
                  <ul className="max-h-96 overflow-y-auto pr-2">
                    {favorites.map((item, index) => (
                      <li key={index} className='mb-4 p-6'>
                        <p className='text-xl text-foreground/80 font-fancy '>{item.content}</p>
                        <p className='text-lg text-foreground/80 mt-3 font-fancy italic'>- {item.author}</p>
                        <button
                          onClick={() => handleDeleteFavorite(item._id)}
                          className='cursor-pointer mt-4 py-2.5 px-6 text-sm bg-red-50 text-red-500 rounded-full font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-100'>
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

                  <p className="text-lg text-foreground/80 mt-8 font-fancy italic ">
                    - {data.author || <Skeleton count={1}/>}
                  </p>
                </>
              )
            }
          </SkeletonTheme>

          <div className='grid items-center justify-center gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3 p-4'>
            {/*<button*/}
            {/*  onClick={handleCopyToLocalStorage}*/}
            {/*  className='border cursor-pointer border-gray-300 rounded-lg shadow-xl pl-10 pr-10 pt-3 pb-3'>*/}
            {/*  Copy*/}
            {/*</button>*/}


            <button
              onMouseLeave={() => setCopied(false)}
              onClick={handleCopyToLocalStorage}
              className='border justify-center cursor-pointer cosmic-button mt-4 px-4 py-2 flex gap-2 items-center'
            >
              {copied ? (
                <>
                  <CheckIcon className="h-4 w-4"/>
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <DocumentDuplicateIcon className="h-4 w-4"/>
                  <span>Copy</span>
                </>
              )}
            </button>


            <button
              onClick={handleFavoriteToLocalStorage}
              className='border justify-center cursor-pointer cosmic-button mt-4 px-4 py-2 flex gap-2 items-center'
            >
              {favorited ? (
                <>
                  <CheckIcon className="h-4 w-4"/>
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Heart className="h-4 w-4"/>
                  <span>Favorite</span>
                </>
              )}
            </button>

            <button
              onClick={refreshPage}
              className='justify-center cursor-pointer cosmic-button mt-4 px-4 py-2 flex gap-2 items-center'>
              Next <ArrowRight size={16}/>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quotable;