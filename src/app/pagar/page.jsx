import React from 'react'
import NavComponent from '../components/Nav';
import FooterComponent from '../components/FooterComponent';

const PagoComponent = () => {
  return (
    <main>

    <NavComponent />

    <section className='altura bg-greydark flex flex-col justify-center items-center gap-y-4 
                        sm:gap-y-4
    '>

      <h3 className='text-white font-semibold text-center text-lg
                      xs:text-2xl
                      sm:text-3xl
                      md:text-4xl
                      xl:text-5xl'> 
         Ingresar servicio a pagar
      </h3>

      <select id="servicios-select" className='bg-greydark p-2 text-white font-semibold  text-center outline-lemon rounded-lg mb-5
      sm:w-[40%]
      md:text-2xl md:p-4 xl:p-6 
      xl:w-[400px]'> 

        <option value="" className='sm:text-base text-center font-light xl:text-2xl py-2 '>
          Seleccionar servicio
        </option>

        <option value="celular" className='sm:text-base text-center font-light xl:text-2xl'>
          Celular
        </option>

        <option value="seguro" className='sm:text-base text-center font-light xl:text-2xl mb-2'>
          Seguro
        </option>

        <option value="impuesto" className='sm:text-base text-center font-light xl:text-2xl mb-2'>
          Impuesto
        </option>

        <option value="luz" className='sm:text-base text-center font-light xl:text-2xl mb-2'>
          Luz
        </option>

        <option value="internet" className='sm:text-base text-center font-light xl:text-2xl mb-2'>
          Internet
        </option>

        <option value="netflix" className='sm:text-base text-center font-light xl:text-2xl mb-2'>
          Netflix
        </option>
        
      </select>

      

     <h3 className='text-white font-semibold text-center text-lg
                      xs:text-2xl
                      sm:text-3xl
                      md:text-4xl
                      xl:text-6xl'> 
         Cantidad de Dinero
      </h3>

      <input placeholder='Ingresar monto' 
              className='text-center text-white py-3 rounded-lg bg-gray-900/70 box-border  outline-none focus:outline-lemon mb-4
                         placeholder:pl-4 placeholder:text-gray-500 active:text-grey-dark
                         w-[80%]
                         xs:w-[60%]
                         sm:w-[50%] sm:text-xl
                         md:py-5
                         lg:w-[25%] lg:py-3 lg:text-xl
                         md:text-2xl md:p-4 xl:p-6 
                        '
            type='number'
        >
         
       </input>

      <div className='flex flex-row gap-x-2'> 
        <a className='box-content w-[110px] bg-greylight block text-center font-semibold py-3 rounded-lg cursor-pointer border-2
                       border-transparent hover:bg-gray-900/70 hover:text-lemon hover:border-lemon
                      transition-all duration-500
                        sm:text-xl sm:py-4 sm:w-[150px]
                        md:py-5
                        lg:py-3 lg:text-xl
                        xl:w-[250px] xl:py-6
                       '
            href="/"
        > Ir atras </a>

        <a className='box-content w-[110px] bg-lemon block text-center font-semibold py-3      rounded-lg cursor-pointer border-2
                      border-transparent hover:bg-gray-900/70 hover:text-lemon hover:border-lemon
                      transition-all duration-500
                        sm:text-xl sm:py-4 sm:w-[150px]
                        md:py-5
                        lg:py-3 lg:text-xl
                        xl:w-[250px] xl:py-6
                       '
            href="./pagoexitoso"
        > Pagar </a>

      </div>  

      
      <p className='bg-red-600/100 text-xs font-semibold text-white box-border px-3 py-2 rounded-md mt-6
                    sm:text-text-base
                    lg:text-lg'>
       Ocurrio un error, vuelve a intentarlo
      </p>

    </section>

    <FooterComponent />
    </main>
  )
}

export default PagoComponent ;