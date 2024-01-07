import React from 'react' ;
import { GoHome } from "react-icons/go";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import Image from 'next/image';
import logo from "../../../public/logomobile.png" ;
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";


const NavMobile = () => {
  return (
    <nav className='w-full opacity-95 bg-greydark absolute bottom-0 flex flex-row justify-around items-center py-2 md:py-4  2xl:hidden'>
       
       <a href="/" className=' p-4'> 
       <GoHome className='text-xl text-lemon xxs:text-3xl md:text-5xl '/>
       </a>
       <a href="../transferir" className=' p-4'> 
        <IoArrowRedoCircleOutline className='text-xl text-lemon xxs:text-3xl  md:text-5xl '/>
       </a>
       <a href="../" className=' '> 
       <Image src={logo} className='w-14 sm:w-20 p-2 bg-lemon rounded-full '/>
       </a>
       <a href="../pagar" className=' p-4'> 
       <FaRegCreditCard className='text-xl text-lemon xxs:text-3xl md:text-5xl '/>
       </a>
       <a href="../settings" className=' p-4'> 
       <MdOutlineSettings className='text-xl text-lemon xxs:text-3xl md:text-5xl '/>
       </a>
    </nav>
  )
}

export default NavMobile