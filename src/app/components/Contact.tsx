import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 data-aos="fade-up" className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p data-aos="fade-up">Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-3'>
                    <input data-aos="fade-up" className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button data-aos="fade-up" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 hover:bg-gray-200 hover:text-black'>Notify Me!</button>
                </div>
            <p data-aos="fade-up">We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter