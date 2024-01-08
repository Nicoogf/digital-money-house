import React from 'react' ;
import Image from 'next/image';
import profile from "../../../../public/profile.png"
import NavMobile from '@/app/components/NavMobile';

const page = () => {
  return (
    <main className='bg-gradient-lemon pt-1'>

       <section className='w-[96%] mx-auto bg-greydark text-white shadow-lg h-screen rounded-lg overflow-scroll
       xxs:pb-24
       sm:pb-32'>

      <article className='mb-3
                          xl:mb-8'>

          <h2 className='font-bold text-xl p-2
                         xxs:text-center xxs:pt-4
                         xs:text-2xl
                         sm:text-3xl sm:pt-8
                         md:text-5xl'> 
                         Ultimos Movimientos 
          </h2>

      </article>

      <section className='flex flex-col'> 

        <article className='bg-greystandar flex flex-row items-center gap-x-2 shadow-xl rounded-lg px-2 w-[95%] mx-auto mb-2
        xxs:justify-around xxs:w-[90%] xxs:py-1 xxs:mb-3
        sm:w-[60%] sm:px-0 sm:py-4
        md:py-6
        xl:max-w-[700px] xl:py-3 xl:justify-between xl:px-8
        '>

          <div className='flex flex-row items-center
                          xxs:gap-x-1
                          sm:gap-x-2
                          '>

          <div>
            <Image src={ profile } className='w-12 h-12 rounded-full p-1
                                              sm:w-14 sm:h-14 
                                              md:w-20 md:h-20'/>
          </div>

          <div>
            <h3 className='text-sm font-bold
                           xs:text-base
                           sm:text-lg
                           md:text-2xl
                           xl:text-xl'> 
                           Pago de Spotify 
            </h3>

            <h5 className='text-xs text-greylight
                          sm:text-base
                          md:text-lg
                          xl:text-base'> 
                            8 de Enero 
            </h5>

          </div>

          </div>

         

          <div>
            <h5 className='text-sm  ml-3 text-greylight
                            xs:text-base
                            sm:text-xl
                            md:text-3xl
                            xl:text-2xl'>
                              $945,73 
            </h5>
            
          </div>
        
        </article>

       

      </section>

   </section>

       <NavMobile />

    </main>
  )
}

export default page