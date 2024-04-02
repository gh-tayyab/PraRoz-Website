import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    return (
        <div className='text-white bg-black'>
            <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 text-xl'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold md:py-6'>Grow with Data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-2xl font-bold py-4'>Fast, flexible financing for</p>
                    <h1 className="md:text-xl font-bold md:pl-4 pl-2">BTB, BTC & SASS</h1>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-gray-200 hover:text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero