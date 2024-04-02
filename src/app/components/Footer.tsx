import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black mx-auto py-16 px-6 grid lg:grid-col-3 gap-8 text-gray-300 '>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PraRoz</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias tenetur exercitationem itaque nisi reiciendis? Voluptatem, dicta perspiciatis. Labore, iste sed.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
       
            <div className='lg:col-span-3 flex justify-between px-4'>
            <div className='font-medium text-gray-400'>
                <h6>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
        


            <div className='font-medium text-gray-400'>
                <h6>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>


            <div className='font-medium text-gray-400'>
                <h6>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>


            <div className='font-medium text-gray-400'>
                <h6>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
            </div>
        </div>
   
  )
}

export default Footer