import React from 'react'
import notFound from '../../images/unicorn2.svg'

const Error404 = () => {
	return (
		<section className="relative bg-primary-bg">
      		<div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-32 lg:py-32">
        		<div className="flex flex-1 flex-col items-center lg:items-start">
          			<h6 className="text-bookmark-white font-bold text-5xl text-center lg:text-left mb-6">
            			¡Oops! Parece que has encontrado un punto sin retorno.
          			</h6>
          			<h6 className="text-bookmark-white font-bold text-5xl text-center lg:text-left mb-6">
            			Verifica que hayas ingresado al sitio correctamente.
          			</h6>
        		</div>
        		<div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          			<img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={notFound} alt="" />
        		</div>
      		</div>
    	</section>
	);
};

export default Error404