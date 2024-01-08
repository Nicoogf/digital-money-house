import React from 'react' ;
import { GoHome } from "react-icons/go" ;
import { IoArrowRedoCircleOutline } from "react-icons/io5" ;
import Image from 'next/image' ;
import logo from "../../../public/logomobile.png" ;
import { FaRegCreditCard } from "react-icons/fa" ;
import { MdOutlineSettings } from "react-icons/md" ;

const NavMobile = () => {
  return (
    <nav className='w-full opacity-95 bg-greydark fixed bottom-0 flex flex-row justify-around items-center py-2 z-50
        md:py-2 
        lg:py-3
        2xl:hidden'>
       
       <a href="../" className='p-4'> 
         <GoHome className='text-xl text-lemon 
                          xxs:text-3xl 
                          md:text-5xl 
                          lg:text-7xl'/>
       </a>

       <a href="../transferir" className='p-4'> 
        <IoArrowRedoCircleOutline className='text-xl text-lemon 
                                             xxs:text-3xl 
                                             md:text-5xl
                                             lg:text-7xl'/>
       </a>

       <a href="../" className=''> 
        <Image src={logo} className='w-14 bg-lemon rounded-full
                                     sm:w-20 p-2
                                    '/>
       </a>

       <a href="../pagar" className='p-4'> 
        <FaRegCreditCard className='text-xl text-lemon 
                                    xxs:text-3xl 
                                    md:text-5xl
                                    lg:text-7xl'/>
       </a>

       <a href="../settings" className='p-4'> 
        <MdOutlineSettings className='text-xl text-lemon 
                                      xxs:text-3xl 
                                      md:text-5xl
                                      lg:text-7xl'/>
       </a>

    </nav>
  )
}

export default NavMobile ;