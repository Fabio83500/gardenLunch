import React from 'react'
import herolunch from "@/public/assets/images/heroLunch.png"
import Image from 'next/image'

export default function layout() {
    return (
        <div className='z-1'>
            <div className="relative min-h-screen bg-cover bg-center "
                style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}>
                {/* Superposition noire avec transparence */}
                <div className="absolute inset-0 bg-black opacity-80"></div> {/* Ce div crée un filtre noir */}
                <div className=" flex flex-col px-4 md:px-8 lg:px-0 items-center text-center justify-center absolute inset-0 ">
                    <Image src={herolunch} 
                    priority alt='logo hero gardenLunch '
                        className='w-[30rem] ' />
                    <div className="flex items-center justify-center ">
                       <a
                        id="numTel" href="tel:07 68 78 18 26"
                            className="shadow-none w-fit mt-8 rounded-md border-none flex items-center space-x-2
                             text-sm px-4 py-2.5
                         font-medium hover:bg-yellow-500 bg-[#b4cd1f] transition duration-150 ease-in-out">
                            <svg id="numTel" className="w-5 h-5" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14
                                 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 
                                 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"></path>
                            </svg><span id="numTel" className="block text-xl">07 68 78 18 26</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
