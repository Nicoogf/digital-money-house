import React from 'react'
import NavComponent from '../components/Nav'
import FooterComponent from '../components/FooterComponent'
import { FaRegCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <main>

    <NavComponent />

    <section className='alturatres bg-greydark flex flex-col justify-center items-center gap-y-4 
                        sm:gap-y-6
    '>

      <h3 className='text-white font-semibold text-center text-xl w-[90%]
                      xs:text-4xl
                      sm:text-3xl
                      md:text-4xl
                      xl:text-3xl'> 
          El pago se realizo de forma exitosa
      </h3>

      <FaRegCheckCircle className='text-lemon text-7xl mb-5'/>

      <div className='w-[80%] flex flex-col mx-auto justify-center items-center'> 

        <p className='text-greylight text-center block text-sm
                        sm:text-base
                        md:text-xl
                        lg:w-[50%] lg:text-2xl
                        xl:w-[50%] xl:text-base '> 
           Servicio Pago :  
        </p>

        <p className='text-white text-center block text-base font-semibold
                        sm:text-base
                        md:text-xl
                        lg:w-[50%] lg:text-2xl
                        xl:w-[50%] xl:text-base '> 
           Luz 
        </p>

        <p className='text-greylight text-center block text-sm
                        sm:text-base
                        md:text-xl
                        lg:w-[50%] lg:text-2xl
                        xl:w-[50%] xl:text-base '> 
           Acabas de Pagar :  
        </p>

        <p className='text-white text-center block text-base font-semibold
                        sm:text-base
                        md:text-xl
                        lg:w-[50%] lg:text-2xl
                        xl:w-[50%] xl:text-base '> 
           $10000 
        </p>

      </div>

      

      <a className='bg-lemon block text-center font-semibold py-3 rounded-lg cursor-pointer border-2
                    w-[70%] border-transparent hover:bg-gray-900/70 hover:text-lemon hover:border-lemon
                    transition-all duration-500
                      sm:w-[50%] sm:text-xl sm:py-4
                      md:py-5
                      lg:w-[25%] lg:py-4 lg:text-2xl
                      xl:w-[14%] xl:py-3'
          href="/"
      > Ir a Inicio  </a>      

    </section>

    <FooterComponent />
  </main>
  )
}

export default page