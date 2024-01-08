import React from 'react' ;
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';
import ButtonLoguin from "../components/ButtonLoguin" ;
import Page from "../testing/page"

const page = () => {
  return (
    <main>

      <NavComponent />

      <section className='altura bg-greydark flex flex-col justify-center items-center gap-y-4 
                          sm:gap-y-6
      '>

        <h3 className='text-white font-semibold text-center text-xl
                        sm:text-3xl
                        md:text-4xl
                        xl:text-3xl'> 
            ¡Hola! 🤑​ <br /> Ingresá tu e-mail
        </h3>

        <input placeholder='Correo electronico' 
                className='text-white py-3 rounded-lg bg-gray-900/70 box-border pl-4 outline-none
                           placeholder:pl-4 placeholder:text-gray-500 active:text-grey-dark
                           w-[80%] focus:outline-1 focus:outline-lemon
                           sm:w-[50%] sm:text-xl
                           md:py-5
                           lg:w-[25%] lg:py-3 lg:text-xl
                           xl:w-[18%]'/>

        <ButtonLoguin opcion="Ingresar" color="verde"/>

        <ButtonLoguin opcion="Crear Cuenta" color="gris"/>

      

        
        <p className='bg-red-600/100 text-xs font-semibold text-white box-border px-3 py-2 rounded-md mt-8
                      sm:text-text-base'>
          Usuario inexistente, vuelve a intentarlo
        </p>

      </section>

      <FooterComponent />
    </main>
   
  )
}

export default page