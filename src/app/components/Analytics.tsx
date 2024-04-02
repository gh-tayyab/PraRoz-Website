import React from 'react'
import Image from 'next/image'
import laptop from '../images/2.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <Image 
            data-aos="fade-up"
            src={laptop}
            alt='laptop'
            width={500}
            height={500}
            className='mx-auto my-4'
            />
            <div className='flex flex-col justify-center'>
                <p data-aos="fade-up" className='text-[#00dF9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 data-aos="fade-up" className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quod eveniet sunt accusamus sapiente at eaque quae necessitatibus ducimus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, vitae?</p>
                <button data-aos="fade-up" className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 hover:bg-gray-200 hover:text-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics