import React from 'react' ;
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';
import ButtonLoguin from "../components/ButtonLoguin" ;                
  

const page = () => {
  return (
  <main>
    <NavComponent />

    <section className='alturados bg-greydark flex flex-col justify-center items-center gap-y-4 
                        sm:gap-y-6
    '>
      <h3 className='text-white text-center text-xl font-semibold'> Crear cuenta </h3>

     <form className='flex flex-col  gap-y-2
                      xs:gap-y-4'> 

        <div className='grid grid-cols-2 gap-y-2 w-[80%] mx-auto
                        xs:w-[70%] xs:gap-y-3 
                        sm:gap-x-3'>

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                            sm:col-span-1 sm:py-3'
                  placeholder='Nombre'/> 

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                            sm:col-span-1 sm:py-3'
                placeholder='Apellido'/> 

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                            sm:col-span-1 sm:py-3'
                placeholder='DNI' /> 

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                            sm:col-span-1 sm:py-3'
                placeholder='Correo Electronico'/> 

        </div>

        <p className='text-greylight w-[80%] mx-auto text-xs
                      xs:py-1 xs:w-[70%]
                      lg:w-[90%] lg:text-center'> 
          Usa entre 6 y 20 caracteres ( debe contener al menos 1 caracter especial. una mayuscula y un numero) 
        </p>

       
        <div className='grid grid-cols-2 gap-y-2 w-[80%] mx-auto mb-2
                        xs:w-[70%] xs:gap-y-3 xs:mb-6
                        sm:gap-x-3'>

          <input className='col-span-2 py-1 rounded-lg
                            text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                             sm:col-span-1 sm:py-3'
                            placeholder='Contraseña'/> 

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-1 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                           sm:col-span-1 sm:py-3'
                            placeholder='Confirmar Contraseña'/> 

          <input className='col-span-2 py-1 rounded-lg
                           text-white bg-gray-900/70 box-border pl-4 outline-none    placeholder:pl-4 placeholder:text-gray-500  active:text-grey-dark  focus:outline-lemon max-w-[350px]
                           sm:col-span-1 sm:py-3'
                            placeholder='Telefono'  /> 

         <ButtonLoguin grid={true} opcion="Registrar" color="verde" url="/loguin"/>                  
      

        </div>

        

     </form>

    </section>

    <FooterComponent />
  </main>
  )
}

export default page ;