'use client'
import React , {useState }from 'react' ;
import Image from 'next/image' ;
import logo from "../../../public/logo2.png" ;
import profile from "../../../public/profile.png" ;
import { IoIosCloseCircleOutline  } from "react-icons/io" ;
import ButtonLoguin from "../components/ButtonLoguin" ;

const NavOff = () => {
   
   const [ menu , setMenu ] = useState(false) ;

   const ToggleMenu = () => {
    setMenu( !menu )
    console.log(menu)
   }

  return (
    <nav className='bg-greydark w-full flex flex-row items-center justify-between
                    xs:py-2
                    sm:py-4 sm:justify-around '>

    
                  
    <div className={` ${ menu ? "visible" : "oculto"} w-[90%] bg-greydark absolute top-0 bottom-0 left-0 flex-col justify-around z-50 
    xs:w-[70%]
    sm:w-[60%]
    lg:w-[40%]
    xl:w-[20%]`}> 
    

        <div className={`absolute top-4 right-4 cursor-poiter`}>
            <button onClick={ ToggleMenu } > <IoIosCloseCircleOutline  className='text-lemon text-4xl'/> </button>
        </div>  

        
        <div onClick={ ToggleMenu } className='mb-8 mt-24'>

            <Image src={profile} className='w-24 rounded-full mx-auto mt-4' />
            <h4 className='text-white text-center text-xl mt-4'> nicolas96 </h4>

        </div>

        <div className='flex flex-col gap-y-2 mb-8'>
            <a className='text-lemon text-center text-xl mt-4 font-light' href='/profile '> Mi Perfil </a>
            <a className='text-lemon text-center text-xl mt-4 font-light' href='/profile/movimientos'> Mis Movimientos </a>
            
        </div>

        <ButtonLoguin opcion="Cerrar Seccion" color="verde" url="../"/>  

    </div>






    <a href='#'>                  
       <Image src={logo} className='w-20 p-2'/>
    </a> 

    <div className='border-lemon flex flex-row items-center gap-x-1 mr-4 cursor-pointer' onClick={ ToggleMenu }>
        <Image src={profile} className='w-12 p-1 rounded-full'/>
        <h4 className='text-lemon'> nicolas96 </h4>
     </div>

    </nav>
  )
}

export default NavOff ;