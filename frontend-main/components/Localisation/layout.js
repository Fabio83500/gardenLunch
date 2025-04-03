import React from 'react'

export default function layout() {
    return (
        <div className='max-w-7xl mt-20 mx-auto'>
        <div className='px-4 md:flex  justify-between md:px-8 lg:px-0'>
        <div className='flex md:w-1/2 mt-10 md:mt-0 items-center justify-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5825.051618634263!2d5.842684576532984!3d43.11447928710652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9046f90289617%3A0x96a154f6cb2e1231!2s55%20Rue%20de%20l&#39;Artisanat%2C%2083140%20Six-Fours-les-Plages!5e0!3m2!1sfr!2sfr!4v1743426911751!5m2!1sfr!2sfr"
                    height="450" className='w-full rounded-xl' loading="lazy" ></iframe>
            </div>
            <div className='flex flex-col items-center '>
                <h4 className='md:text-5xl text-4xl mt-10 md:mt-0'>Ou nous trouver ? </h4>
                <span className='text-[#b4cd1f] text-3xl my-4 block'>GardenLunch</span>
                <span className=' text-xl'>55 Rue de l'artisanat <br /> 83140 Six fours les plages</span>
                <span className='block text-[#b4cd1f] text-2xl mt-4'>07 68 78 18 26 </span>
                <div className='text-lg mt-4'>
                    <span className='block '>Lundi : 11:00 - 14:00 </span>
                    <span className='block '>Mardi : 11:00 - 14:00 </span>
                    <span className='block '>Mercredi : 11:00 - 14:00 </span>
                    <span className='block '>Jeudi : 11:00 - 14:00 </span>
                    <span className='block '>Vendredi : 11:00 - 14:00 </span>
                    <span className='block '>Samedie : Fermé </span>
                    <span className='block '>Dimanche : Fermé </span>
                </div>

            </div>
           
        </div>
    </div>
    )
}
