import React from 'react' ;
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';

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
                            sm:col-span-1 sm:py-3'/> 
          <input className='col-span-2 py-1 rounded-lg
                            sm:col-span-1 sm:py-3'/> 
          <input className='col-span-2 py-1 rounded-lg
                            sm:col-span-1 sm:py-3'/> 
          <input className='col-span-2 py-1 rounded-lg
                            sm:col-span-1 sm:py-3'/> 

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
                            sm:col-span-1 sm:py-3'/> 
          <input className='col-span-2 py-1 rounded-lg
                            sm:col-span-1 sm:py-3'/> 
          <input className='col-span-2 py-1 rounded-lg
                            sm:col-span-1 sm:py-3'/> 

          <a className='box-border col-span-2 bg-lemon text-center font-semibold cursor-pointer border-2 
                        border-transparent hover:bg-gray-900/70 hover:text-lemon hover:border-lemon
                        transition-all duration-500 rounded-lg                        
                        sm:col-span-1 
                        sm:text-xl sm:py-3                               
                        lg:text-lg'
                    href="./"
                > Crear cuenta </a>                   
      

        </div>

        

     </form>

    </section>

    <FooterComponent />
  </main>
  )
}

export default page ;