import React from 'react';
//import ImageOne from '../images/egg-crispy.jpg';
import ImageTwo from '../../images/musicc.png';

const Content = () => {
  return (
    <>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-36 lg:py-36">
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageTwo} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Azami
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-36 lg:py-36">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Azami
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageTwo} alt="" />
          </div>
        </div>
      </section>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-36 lg:py-36">
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageTwo} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Azami
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
