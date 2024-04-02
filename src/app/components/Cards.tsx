import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 justify-center gap-8'>
           
            <div data-aos="fade-up" className='w-[350px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>



            <div data-aos="fade-up" className='w-[350px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send upto 10 GB</p>
                </div>
                <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>




            <div data-aos="fade-up" className='w-[350px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send upto 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Cards