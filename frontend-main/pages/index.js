import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image';
import Hero from "@/components/Hero/layout"
import Carte from "@/components/Carte/layout"
import Localisation from "@/components/Localisation/layout"
import Apropos from "@/components/Apropos/layout"
import Carroussel from "@/components/Caroussel/layout"
import gardenLunch from "@/public/assets/images/gardenLunch.png"

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>gardenLunch</title>
        <meta name="description" content="Situé au cœur de la zone des Playes à Six-Fours, GardenLunch est l'endroit idéal pour une pause déjeuner savoureuse et rapide. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b4cd1f"></meta>
        <link rel="icon" href="/engine.ico" />
      </Head>

      <section id="accueil">
        <nav className="bg-[#fff] sticky top-0 shadow-lg z-50 relative">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image className='w-[7rem] h-14 object-cover' src={gardenLunch} priority alt='logo gardenLunch' width={800} height={240} />
            </a>
            <button onClick={handleClick} className="md:hidden ">
              {isOpen ? (
                // Icône croix
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône burger
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            <div className='hidden md:block'>
              <ul className="flex space-x-10 items-center ">
                <li><a className="w-full hover:text-[#b4cd1f]" href="/#accueil">Accueil</a></li>
                <li><a className="w-full hover:text-[#b4cd1f]" href="/#carte">La carte</a></li>
                <li><a className="w-full hover:text-[#b4cd1f]" href="/#apropos">A propos</a></li>
              </ul>
            </div>
            {/* Menu Mobile */}
            <div className={`${isOpen ? "block" : "hidden"} absolute top-20 left-0 w-full bg-[#FFF] md:hidden`}>
              <ul className="flex flex-col p-4 space-y-2">
                <li><a href="/#carte" className="block py-2 px-3">La carte</a></li>
                <li><a href="/#apropos" className="block py-2 px-3">A propos</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Hero />
        <div className='max-w-7xl mx-auto'>
          <Carte />
        </div>
        <div className='bg-gray-100'>
          <Apropos />
        </div>
        <Localisation />
        <Carroussel />
      </section>
    </>
  );
}
