import React, { useState } from 'react'
import Icon from '../../images/iconAzami.png';

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(true)
  

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
      <nav className="bg-primary-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src={Icon} alt="Logo" className="h-8 w-8 mr-2"/>
                <span className="font-semibold text-white text-lg">Azami</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-white border-b-4 border-bookmark-red font-semibold ">Inicio</a>
              <a href="https://discord.gg/qwATJpNhqG" className="py-4 px-2 text-white font-semibold hover:text-bookmark-red transition duration-300">Soporte</a>
              <a href="/commands/" className="py-4 px-2 text-white font-semibold hover:text-bookmark-red transition duration-300">Comandos</a>
              <a href="/premium/" className="py-4 px-2 text-white font-semibold hover:text-bookmark-red transition duration-300">Premium</a>
            </div>
          </div>
        
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
            <svg className=" w-6 h-6 text-white hover:text-bookmark-red "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
      <div className={`${menuActive ? "hidden" : ""} mobile-menu transition ease-in-out duration-500`}>
        <ul className="">
          <li className="active"><a href="/" className="block text-sm text-white px-2 py-4 text-white bg-bookmark-red font-semibold">Inicio</a></li>
          <li><a href="https://discord.gg/qwATJpNhqG" className="block text-sm px-2 text-white py-4 hover:bg-bookmark-red transition duration-300">Soporte</a></li>
          <li><a href="/commands/" className="block text-sm px-2 text-white py-4 hover:bg-bookmark-red transition duration-300">Comandos</a></li>
          <li><a href="/premium/" className="block text-sm px-2 text-white py-4 hover:bg-bookmark-red transition duration-300">Premium</a></li>
        </ul>
      </div>
      
    </nav>
    )
}

export default Navbar
