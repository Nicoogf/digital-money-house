import React from 'react' ;
import NavMobile from '../components/NavMobile' ;
import Image from 'next/image';
import profile from "../../../public/profile.png" ;
import { FaBus } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa" ;
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io"; 
import { BsGraphDown } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const page = () => {
  return (
    <main className='relative h-screen bg-gradient-lemon'>

       <section className='alturacuatro flex flex-col gap-y-2 mx-auto  overflow-scroll'>      
       
          <div className='flex flex-row items-center justify-between w-full bg-greydark
          xs:py-2'> 

           <div className='flex justify-center items-center py-3
           md:p-4'>  

            <Image src = { profile } className='w-12 h-12 rounded-full relative left-4 border-[2px] border-lemon
            xs:w-14 xs:h-14 xs:left-4'/>

            <h3  className='text-sm text-greylight font-semibold bg-greydark px-4 py-2 rounded-r-full border-[1px] border-lemon ml-2 xxs:text-xl         
            '> 
              Hola Nicolas 
            </h3>

          </div>           
            
            <div className='relative cursor-pointerflex flex-row justify-center items-center px-4 mr-4
            '> 
              <IoIosNotificationsOutline  className='cursor-pointer text-lemon text-4xl'/>
              <h6 className='absolute block bg-red-500 rounded-full w-4 h-4 text-white text-center top-0 left-4 text-xs'> 2 </h6>
            </div>
          
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
          md:w-[60%]'>
            <h4 className=' text-greylight font-semibold text-sm mb-2'> Disponible : </h4>
            <h4  className='text-white w-[60%] font-semibold text-2xl'> $ 543.241 </h4>

            <div className='mt-4 flex flex-row justify-between'>
                            
            

              <a className='font-thin text-xs w-[75px]'> 
                <FaRegCreditCard className='box-content p-1 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1'/>
                <p className='text-lemon text-center '> Ingresar  </p>
              </a>

              <a className='font-thin text-xs w-[75px]'> 
                <BsGraphDown className='box-content p-1 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1 font-semibold' />
                <p className='text-lemon text-center '> Movimientos  </p>
              </a>

              <a className='text-lemon font-thin text-xs w-[75px]'> 
                <IoArrowRedoCircleOutline className='box-content p-1 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1'/>
                <p className='text-lemon text-center '>Enviar </p>
              </a>
            
            </div>
          
            <FaRegMoneyBill1 className='absolute text-greylight top-5 right-5 text-4xl'/>
          </div>


          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4 className='bg-lemon text-greydark w-[30%] rounded-xl text-center font-light text-sm mb-2'> ¡Nuevo! </h4>
            <h4  className='text-white w-[60%] font-semibold'> Carga tu sube mas rapido y facil con QR </h4>
            <h4  className='text-greylight font-thin text-xs'>Disponible en terminales de subte </h4>
            <FaBus className='absolute text-greylight top-5 right-5 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Seguros y garantias </h4>
            <h4  className='text-greylight font-thin text-xs w-[80%]'>Descubri tus seguris y garantias , transparentes y sin letras chicas </h4>
            <FaShieldAlt className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>

          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div><div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>
          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>
          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>
          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>
          <div className='relative bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] mx-auto rounded-lg
           md:w-[60%]'>
            <h4  className='text-white w-[70%] font-semibold'> Prestamos </h4>
            <h4  className='text-greylight font-thin text-xs w-[70%]'>Pedi hasta <span className='text-white font-bold'> $250000 </span> con un prestamo personal </h4>
            <GrMoney className='absolute text-greylight top-4 right-4 text-4xl'/>
          </div>


          <a href="../loguin" className='block bg-gray-200 w-[70%] mx-auto text-greydark font-semibold text-center py-3 rounded-lg shadow-lg
           md:w-[60%]'> Cerrar Session </a>

       </section>
      
       <NavMobile />

    </main>
  )
}

export default page