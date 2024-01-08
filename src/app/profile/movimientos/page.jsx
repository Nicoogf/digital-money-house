import React from 'react' ;
import Image from 'next/image';
import profile from "../../../../public/profile.png"
import NavMobile from '@/app/components/NavMobile';

const page = () => {
  return (
    <main className='bg-lemon pt-1'>

       <section className='w-[96%] mx-auto bg-greydark text-white shadow-lg h-screen rounded-lg'>

        <article className=''>
          <h2 className='font-bold text-xl p-2'> Ultimos Movimientos </h2>
        </article>

      <section className='flex flex-col'> 

        <article className='bg-greystandar flex flex-row items-center gap-x-2 shadow-xl rounded-lg px-2 w-[95%] mx-auto mb-2'>

          <div>
            <Image src={ profile } className='w-12 h-12 rounded-full p-1'/>
          </div>

          <div>
            <h3 className='text-sm font-bold'> Pago de Spotify </h3>
            <h5 className='text-xs text-greylight'> 8 de Enero </h5>
          </div>

          <div>
            <h5 className='text-sm  ml-3 text-greylight'>$945,73 </h5>
            
          </div>
        
        </article>
        

        


      </section>

   </section>

       <NavMobile />

    </main>
  )
}

export default page