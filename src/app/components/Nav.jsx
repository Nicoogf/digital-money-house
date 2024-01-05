import React from 'react' ;
import Image from 'next/image' ;
import logo from "../../../public/logo.png" ;


const NavComponent = () => {
  return (
    <nav className='bg-lemon w-full flex flex-row items-center justify-start
                    xs:py-2
                    sm:py-4 
                    '>
        <Image src={logo} className='w-20 p-2'/>

       
    </nav>
  )
}

export default NavComponent ;