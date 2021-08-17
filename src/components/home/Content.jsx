import React from 'react';
import Level from '../../images/niveles.svg'
import Welcome from '../../images/welcome.svg'
import Commands from '../../images/commands.svg';
 
const Content = () => {
  return (
    <>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-32 lg:py-32">
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={Level} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              ¡Sé el primero en el ranking!
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Gánale a la competencia y logra el primer nivel, incentivando la actividad dentro del servidor. Personaliza
              el sistema de niveles con diferentes apartados como las recompensas, multiplicador, deshabilita canales, etc.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-32 lg:py-32">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Un grato saludo a los nuevos miembros.
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Personaliza el sistema de bienvenidas y haz que esa primera vista sea mágica. Logra una buena impresión con un poderoso sistema de
              embeds totalmente customizables y amigables.
            </p>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={Welcome} alt="" />
          </div>
        </div>
      </section>
      <section className="relative bg-secondary-bg">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-36 lg:py-36">
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={Commands} alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="font-bold text-bookmark-red text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Crea tus propios comandos.
            </h2>
            <p className="text-bookmark-white font-semibold text-lg text-justify lg:text-justify mb-6">
              Crea atajos para los miembros con el creador de comandos, personalízalos a tu manera y haz que sea más fácil
              navegar dentro del servidor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
