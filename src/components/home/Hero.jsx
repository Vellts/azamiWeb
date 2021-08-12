import React from 'react';
import ImageTwo from '../../images/test.svg';
//import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-primary-bg">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-48 lg:py-52">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Azami
          </h2>
          <p className="text-bookmark-white font-semibold text-lg text-center lg:text-left mb-6">
            ¡Conquista las mazmorras, crea tu gremio, establece amistades y disfruta!
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <a href="https://discord.gg/qwATJpNhqG">
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              Invitame
            </button>
            </a>
            <a href="/premium">
            <button type="button" className="btn btn-white hover:bg-bookmark-red hover:text-white">
              Premium
            </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageTwo} alt="" />
        </div>
      </div>
    </section>
      /*<section className="relative bg-primary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              A Simple Bookmark Manager
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
              load instantly. Try it for free.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                Get it on Chrome
              </button>
              <button type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">
                Get it on Firefox
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageTwo} alt="" />
          </div>
        </div>
        
      </section>*/
    );
};

export default Hero;
