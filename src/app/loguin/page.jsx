import React from 'react' ;
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';

const page = () => {
  return (
    <main>

      <NavComponent />

      <section className='altura bg-greydark flex flex-col justify-center items-center gap-y-4 
                          sm:gap-y-6
      '>

        <h3 className='text-white font-semibold text-center text-xl
                        sm:text-4xl
                        md:text-5xl
                        xl:text-3xl'> 
            ¡Hola! Ingresá tu e-mail
        </h3>

        <input placeholder='Correo electronico' 
                className='text-white py-3 rounded-lg bg-greystandar box-border pl-4 outline-none
                           placeholder:pl-4 placeholder:text-gray-500 active:text-grey-dark
                           w-[80%]
                           sm:w-[50%] sm:text-2xl
                           md:py-6
                           lg:w-[20%] lg:py-4 lg:text-xl
                           xl:w-[18%] lg:py-3 lg:text-lg'/>

        <a className='bg-lemon block text-center font-semibold py-3 rounded-lg cursor-pointer border-2
                      w-[80%] border-transparent hover:bg-transparent hover:text-lemon hover:border-lemon
                      transition-all duration-500
                        sm:w-[50%] sm:text-2xl sm:py-4
                        md:py-6
                        lg:w-[20%] lg:py-4 lg:text-xl
                        xl:w-[18%] lg:py-3 lg:text-lg'
        > Confirmar </a>

        <a className='bg-greylight block text-center font-semibold py-3 rounded-lg cursor-pointer border-2
                        w-[80%] border-transparent hover:bg-transparent hover:text-greylight hover:border-greylight
                        transition-all duration-500
                        sm:w-[50%] sm:text-2xl sm:py-4
                        md:py-6
                        lg:w-[20%] lg:py-4 lg:text-xl
                        xl:w-[18%] lg:py-3 lg:text-lg'
        > Crear Cuenta </a>
        
        <p className='bg-red-600/100 text-xs text-white box-border px-2 py-1 rounded-md mt-8
                      sm:text-md'>
          Usuario inexistente, vuelve a intentarlo
        </p>

      </section>

      <FooterComponent />
    </main>
   
  )
}

export default page