import React from 'react' ;
import Image from 'next/image';
import logo from "../../../public/logo2.png" ;

const NavOff = () => {
  return (
    <nav className='bg-greydark w-full flex flex-row items-center justify-between
                    xs:py-2
                    sm:py-4 sm:justify-around'>

    <Image src={logo} className='w-20 p-2'/>

    <div className='mr-4 flex flex-row gap-x-2 sm:mr-0 sm:gap-x-6'>
        <a href="./loguin"
           className='text-lemon font-semibold text-xs border-[1px] border-lemon px-2 py-1 rounded-md
                      hover:bg-gray-200/70 hover:text-greydark hover:border-white transition-all duration-500
                      xs:text-sm 
                      sm:text-lg sm:px-6 py-2
                      xl:py-1 xl:text-base' > 
           Ingresar 
        </a>

        <a href="./register"
           className='text-greydark font-semibold text-xs bg-lemon border-[1px] border-lemon px-2 py-1 rounded-md
                      hover:bg-gray-900/70 hover:text-lemon transition-all duration-500
                      xs:text-sm
                      sm:text-lg sm:px-6 py-2
                      xl:py-1 xl:text-base'> 
           Crear cuenta 
        </a>
    </div>

    </nav>
  )
}

export default NavOff ;