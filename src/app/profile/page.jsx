import React from 'react' ;
import NavMobile from '../components/NavMobile' ;
import Image from 'next/image';
import profile from "../../../public/profile.png" ;
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io" ; 
import { BsGraphDown } from "react-icons/bs" ;
import { FaRegCreditCard } from "react-icons/fa" ;
import { IoArrowRedoCircleOutline } from "react-icons/io5" ;


const page = () => {
  return (
    <main className='relative h-screen bg-gradient-lemon'>

       <section className='alturacuatro flex flex-col gap-y-2 mx-auto overflow-scroll'>      
       

          {/* Nav */ } 
          <div className='w-full  bg-greydark
                          xs:py-2
                          sm:mb-2
                          md:py-1
                          '> 

            <div className='flex flex-row items-center justify-between 
                              sm:w-[80%] sm:mx-auto
                              xl:w-[60%]'>

              <div className='flex justify-center items-center py-3
                  md:p-4 md:py-2
                  '>  

                    <Image src = { profile } className='w-12 h-12 rounded-full relative left-5 border-[2px] border-lemon
                           xxs:left-6
                           xs:w-14 xs:h-14 xs:left-6
                           md:w-20 md:h-20
                          '/>

                    <h3  className='text-sm text-greylight font-semibold bg-greydark px-4 py-2 rounded-r-full border-[1px] border-lemon ml-2 
                          xxs:text-lg  xxs:pl-6  xxs:pr-4
                          md:text-3xl
                          xl:text-xl  
                    '> 
                      Hola Nicolas 
                    </h3>

              </div>           
                
              <div className='relative cursor-pointer flex flex-row justify-center items-center px-4 mr-4
                '> 
                  <IoIosNotificationsOutline  className='cursor-pointer text-lemon text-4xl
                  xxs:text-5xl
                  md:text-7xl
                  xl:text-5xl'/>

                  <h6 className='absolute block bg-red-500 rounded-full w-4 h-4 text-white text-center top-0 left-4 text-xs
                  xxs:w-5 xxs:h-5 xxs:text-sm
                  md:w-8 md:h-8 md:text-xl
                  xl:text-sm xl:w-5 xl:h-5 '> 2 </h6>
              </div>

            </div>        
          
          </div>


          {/* Dashboard Dinero Actual*/}
          <div className='relative max-w-[800px] bg-greydark flex flex-col gap-x-2 p-5 shadow-2xl w-[95%] mx-auto rounded-xl
          md:w-[65%]
          lg:p-10'>

            <h4 className='text-greylight font-semibold text-base mb-2
                           md:text-2xl md:mb-4
                           xl:text-xl
                            '> Disponible : </h4>
            <h4  className='text-white w-[70%] font-semibold text-3xl
                            md:text-5xl md:mb-6
                            xl:text-4xl'> $ 543.241 </h4>

            <div className='mt-4 flex flex-row justify-between gap-x-4 md:mb-4
                            xl:w-[70%] xl:mx-auto'>                           
            
              <a className='font-thin flex flex-col gap-y-2 text-xs w-[75px] cursor-pointer
                            sm:w-[110px] 
                            md:w-[130px]'
              > 
                <FaRegCreditCard className='box-content p-2 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1
                md:text-6xl
                xl:text-4xl'/>

                <p className='text-lemon text-center text-sm font-normal  
                sm:text-base
                md:text-2xl
                xl:text-xl'>
                  Ingresar  
                </p>
              </a>

              <a className='font-thin flex flex-col gap-y-2 text-xs w-[75px]cursor-pointer  
              sm:w-[110px]
              md:w-[130px]'
              > 

                <BsGraphDown className='box-content p-2 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1
                md:text-6xl
                xl:text-4xl'
                />

                <p className='text-lemon text-center text-sm font-normal  
                sm:text-base
                md:text-2xl
                xl:text-xl'>
                  Movimientos  
                </p>

              </a>

              <a className='text-lemon flex flex-col gap-y-2 font-thin text-xs w-[75px] sm:w-[110px] md:w-[130px] cursor-pointer'> 
                <IoArrowRedoCircleOutline className='box-content p-2 block mx-auto text-greydark bg-lemon text-2xl rounded-full mb-1
                md:text-6xl
                xl:text-4xl'/>
               <p className='text-lemon text-center text-sm font-normal  
                sm:text-base
                md:text-2xl
                xl:text-xl'>
                  Enviar  
                </p>
              </a>
            
            </div>
          
            <FaRegMoneyBill1 className='absolute text-greylight top-5 right-5 text-4xl md:text-7xl'/>
          </div>



          {/* Publicidad */}
          <div className='relative max-w-[800px] bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] h-[240px] mx-auto rounded-xl
          sm:p-6 
          md:w-[65%]
          lg:p-10 
          xl:p-8
          '>

            <h4 className='bg-lemon text-greydark w-[27%] rounded-xl text-center font-light text-sm mb-2
            sm:text-base sm:font-normal sm:w-[25%] sm:mb-5 
            md:text-2xl md:font-semibold
            lg:text-3xl lg:w-[21%] lg:py-1
            xl:w-[18%] xl:text-xl'> 
                ¡Nuevo! 
            </h4>

            <h4  className='text-white w-[90%] font-semibold mb-2 text-lg
                            sm:text-xl sm:w-[70%] z-10
                            md:w-[90%] md:text-2xl
                            lg:text-3xl
                            xl:text-2xl'> 
                Carga tu sube mas rapido y facil con QR 
            </h4>

            <h4  className='text-greylight font-thin text-xs
                            sm:text-base
                            md:text-lg
                            lg:text-2xl
                            xl:text-xl'>
              Disponible en terminales de subte 
            </h4>
    
          </div>

       
          <div className='relative max-w-[800px] bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] h-[240px] mx-auto rounded-xl 
           sm:p-6
           md:w-[65%]
           lg:p-10
           xl:text-xl xl:p-8 '>
            <h4  className='text-white w-[70%] font-semibold mb-2
                            md:w-[90%] md:text-2xl
                            lg:text-3xl
                            xl:text-2xl'> 
                Prestamos 
            </h4>

            <h4  className='text-greylight font-thin text-xs w-[90%]
                            md:text-lg
                            lg:text-2xl
                            xl:text-xl
                            '>
                            Pedi hasta
                            <span className='text-white font-bold px-1'> 
                            $250000 
                            </span> 
                            con un prestamo personal 
            </h4>            
          </div>

          <div className='relative max-w-[800px]  bg-greydark flex flex-col gap-x-2 p-4 shadow-2xl w-[95%] h-[240px] mx-auto rounded-lg mb-1
           md:w-[65%]
           lg:p-10
           xl:p-6'>

            <h4  className='text-white w-[70%] font-semibold mb-2
                            sm:text-xl sm:w-[70%]
                            md:w-[90%] md:text-2xl
                            lg:text-3xl
                            xl:text-2xl'>
               Seguros y garantias 
            </h4>

            <h4  className='text-greylight font-thin text-xs w-[80%]
                            sm:text-base z-10
                            md:text-lg md:w-[95%]
                            lg:text-2xl
                            xl:text-xl'>                              
                Descubri tus seguris y garantias , transparentes y sin letras chicas 
            </h4>

          </div>


          

          <a href="../loguin" className='block max-w-[300px] bg-gray-200 w-[70%] mx-auto text-greydark font-semibold text-center py-3 rounded-lg shadow-lg
          sm:py-6 
          md:w-[60%]
          lg:text-2xl
          xl:py-4 xl:text-xl'> Cerrar Session </a>

       </section>
      
       <NavMobile />

    </main>
  )
}

export default page