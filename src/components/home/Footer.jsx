import React from 'react';
import Banner from '../../images/azamiBanner.png';

const Footer = () => {
    return (
       <div className="w-full bg-primary-bg text-white font-semibold">
  <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
    <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
      <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="57" viewBox="0 0 160 57">
          <defs>
            <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 197 70">
              <image width="197" height="70" href={Banner} />
            </pattern>
          </defs>
          <rect id="ETI-Logo" width="160" height="57" fill="url(#pattern)" />
        </svg>
        <p >© Azami 2021. Todos los derechos reservados.</p>
      </div>
      <div className="w-full sm:w-1/5 flex flex-col space-y-4 ">
        <p className="">Sobre Azami</p>
        <a href="/coomands" className="text-footer-c hover:text-bookmark-red transition duration-300">Comandos</a>
        <a href="/support" className="text-footer-c hover:text-bookmark-red transition duration-300">Soporte</a>
        <a href="/api/v1" className="text-footer-c hover:text-bookmark-red transition duration-300">Api</a>
      </div>
      <div className="w-full sm:w-1/5 flex flex-col space-y-4">
        <p className="opacity-90">Sobre Nosotros</p>
        <a href="/privacy" className="text-footer-c hover:text-bookmark-red transition duration-300">Política de Privacidad</a>
        <a href="/terms-condition" className="text-footer-c hover:text-bookmark-red transition duration-300">Terminos y Condiciones</a>
      </div>
    </div>
  </div>
</div>
    );
};

export default Footer;
