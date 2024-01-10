import React from 'react'
import NavComponent from '../components/Nav'
import FooterComponent from '../components/FooterComponent'
import ButtonLoguin from "../components/ButtonLoguin" ;
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

     <ButtonLoguin opcion="Ingresar" color="verde" url="../"/>      

    </section>

    <FooterComponent />
  </main>
  )
}

export default page