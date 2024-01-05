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

      <h3 className='text-white font-semibold text-center text-xl
                      xs:text-4xl
                      sm:text-3xl
                      md:text-4xl
                      xl:text-3xl'> 
          Registro Exitoso
      </h3>

      <FaRegCheckCircle className='text-lemon text-7xl mb-5'/>

      <p className='text-greylight text-center block w-[80%] text-sm
                    sm:text-base
                    md:text-xl
                    lg:w-[50%] lg:text-2xl
                    xl:w-[50%] xl:text-base '> 
        Hemos enviado un correo de confirmacion para validar tu email, por favor revisalo para iniciar sesion 
      </p>

      <a className='bg-lemon block text-center font-semibold py-3 rounded-lg cursor-pointer border-2
                    w-[70%] border-transparent hover:bg-gray-900/70 hover:text-lemon hover:border-lemon
                    transition-all duration-500
                      sm:w-[50%] sm:text-xl sm:py-4
                      md:py-5
                      lg:w-[25%] lg:py-4 lg:text-2xl
                      xl:w-[14%] xl:py-3 lg:text-base'
          href="./confirm"
      > Continuar  </a>      

    </section>

    <FooterComponent />
  </main>
  )
}

export default page