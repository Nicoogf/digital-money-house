import React from 'react' ;
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';

const page = () => {
  return (
    <main classname="bg-red-500">
      <NavComponent />

      <section className='altura bg-greydark flex flex-col justify-center items-center gap-y-4'>

         <h3 className='text-white font-semibold text-center text-lg'> 
            ¡Hola! Ingresá tu e-mail
          </h3>

         <input placeholder='Correo electronico' 
                className='text-white w-[80%] py-3 rounded-lg bg-greystandar box-border pl-4 outline-none
                           placeholder:pl-4 placeholder:text-gray-500 active:text-grey-dark'/>

         <a className='bg-lemon w-[80%] block text-center font-semibold py-3 rounded-lg'> Confirmar </a>
      </section>

      <FooterComponent />
    </main>
   
  )
}

export default page