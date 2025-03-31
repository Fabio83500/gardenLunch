import React from 'react'
import imgApropos from "@/public/assets/images/imgApropos.jpg"
import Image from 'next/image'
export default function layout() {
  return (
    <div className='max-w-7xl mx-auto pt-5 pb-10' >
         <div id="apropos" className='px-4 md:px-8 lg:px-0'>
            <h2 className='text-4xl mb-10 md:mb-0 text-center text-[#b4cd1f] '>A propos de nous </h2>
            <div className='md:flex items-center justify-between'>
              <p className=' md:w-1/2 mb-10 md:mb-0 text-xl '>
                Situé au cœur de la zone des Playes à Six-Fours, GardenLunch est l'endroit idéal pour une pause
                 déjeuner savoureuse et rapide.<br/> <br/> Ouvert du lundi au vendredi de 11h à 14h, notre snack vous
                  propose des plats généreux et gourmands, préparés avec des ingrédients frais et de qualité.
                   <br/> <br/> Que vous soyez pressé ou que vous souhaitiez profiter d'un moment convivial, GardenLunch 
                   vous accueille avec bonne humeur et simplicité. <br /> Venez découvrir notre menu et faites de 
                   votre pause repas un vrai moment de plaisir !
                </p>
                <Image className='md:w-1/3 h-[30rem] object-cover' src={imgApropos} width={2500} height={1000} />
            </div>
          </div>
    </div>
  )
}
