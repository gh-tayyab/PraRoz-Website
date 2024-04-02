"use client"
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'


const Nav = () => {
    let name;
    const [  open, setOpen ] = useState( false )
    const [ seo, setSeo ] = useState("Test")
  return (
    <header className=" py-2 bg-black">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
            <Link href="/">
        <h2 className='text-3xl md:text-4xl font-medium text-[#00df9a]'>PraRoz</h2>
          </Link>
          <FiMenu size={28} className="lg:hidden block h-6 w-6 cursor-pointer text-white" onClick={() => setOpen(!open)}/>
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base lg:flex lg:justify-between text-white">
                <li className="lg:px-5 py-2 hover:text-[#00df9a] font-semibold">
                    <Link href="/">Home</Link>
                </li>
                <li className="lg:px-5 py-2 hover:text-[#00df9a] font-semibold">
                    <Link href="/Analytics">Analytics</Link>
                </li>
                <li className="lg:px-5 py-2 hover:text-[#00df9a] font-semibold">
                    <Link href="/Contact">Contact</Link>
                </li>
                <li className="lg:px-5 py-2 hover:text-[#00df9a] font-semibold">
                    <Link href="/Cards">Cards</Link>
                </li>
                
            </ul>
         </nav>
        </div>

    </header>


    
  )
}

export default Nav