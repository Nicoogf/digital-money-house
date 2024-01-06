import React from 'react' ;
import NavMobile from '../components/NavMobile' ;
import Image from 'next/image';
import profile from "../../../public/profile.png" ;
import { FaBus } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa" ;
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";

const page = () => {
  return (
    <main className='relative h-screen bg-gradient-lemon'>
       <section className='flex flex-col gap-y-2 md:w-[65%] mx-auto'>      
       
          <div className='flex flex-row  items-center justify-between w-full bg-greydark'> 

           <div  className='flex items-center p-2 md:mt-8 '>  
            <Image src = { profile } className='w-12 h-12 rounded-full relative left-2 border-2 border-lemon '/>
            <h3  className='text-sm text-greylight bg-greydark px-4 py-2 rounded-r-full border-2 border-lemon'> Hola Nicolas </h3>
           </div>           
            
            <div className='relative cursor-pointer'> 
              <IoIosNotificationsOutline  className='cursor-pointer text-lemon text-4xl mr-8'/>
              <span className='absolute block bg-red-500 rounded-full w-4 h-4 text-white text-center top-0 left-0 text-xs'> 2 </span>
            </div>
          
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg'>
            <h4 className=' text-greylight font-semibold text-xs'> Disponible : </h4>
            <h4  className='text-white w-[60%] font-semibold'> $ 543.241 </h4>
            <h4  className='text-greylight font-thin text-xs'>Disponible en terminales de subte </h4>
            <FaRegMoneyBill1 className='absolute text-greylight top-5 right-5 text-4xl'/>
          </div>


          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg'>
            <h4 className='bg-lemon text-greydark w-[30%] rounded-xl text-center font-light text-sm mb-2'> ¡Nuevo! </h4>
            <h4  className='text-white w-[60%] font-semibold'> Carga tu sube mas rapido y facil con QR </h4>
            <h4  className='text-greylight font-thin text-xs'>Disponible en terminales de subte </h4>
            <FaBus className='absolute text-greylight top-5 right-5 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg'>
            <h4  className='text-white w-[70%] font-semibold'> Seguros y garantias </h4>
            <h4  className='text-greylight font-thin text-xs'>Descubri tus seguris y garantias , transparentes y sin letras chicas </h4>
            <FaShieldAlt className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <a href="../loguin" className='bg-gray-200 w-[70%] mx-auto text-greydark font-semibold text-center py-3 rounded-lg shadow-lg'> Cerrar Session </a>

       </section>
      
        <NavMobile />
    </main>
  )
}

export default page