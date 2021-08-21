import React from 'react'
import ImageConstruction from '../../images/bear.svg'

const Invite = () => {

  global.window && (global.window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=798372219620819004&permissions=122305244534&scope=bot%20applications.commands')

  return (
    <section href="https://discord.gg/H5wKDHT4" className="relative bg-primary-bg py-16">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-32 lg:py-32">
            <div className="flex flex-1 flex-col items-center lg:items-start">
                <h6 className="text-bookmark-white font-bold text-5xl text-center lg:text-left mb-6">
                  Redireccionando...
                </h6>
            </div>
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={ImageConstruction} alt="" />
            </div>
          </div>
      </section>
  );
};

export default Invite