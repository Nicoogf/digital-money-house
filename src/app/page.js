import FooterComponent from "./components/FooterComponent";
import NavOff from "./components/NavOff";
import NavOn from "./components/NavOn";


export default function Home() {
  return (
    <main className="w-full">

    <NavOn />

    <section className='alturatres bg-greydark flex flex-col gap-y-1 relative 
                        sm:gap-y-6                        
    '>

      <h3 className='w-[50%] text-white font-semibold text-xl mt-6 ml-4
                      xs:mt-4 xs:text-xl
                      sm:text-4xl sm:mt-14 sm:ml-8
                      md:text-4xl md:mt-8
                      lg:mt-2 lg:w-[60%] lg:mx-auto
                      xl:text-3xl xl:mt-24'> 
          De ahora en <br />adelante,haces mas con tu dinero
      </h3>

      <span className="block relative after:content-[''] after:block after:w-24 after:h-[2px] after:bg-lemon after:ml-4  after:rounded-lg
                       lg:w-[60%] lg:mx-auto">
      </span>

      <h3 className='text-lemon font-extralight text-xl ml-4
                      xs:text-xl
                      sm:text-5xl sm:ml-8
                      md:text-4xl
                      lg:mx-auto lg:w-[60%]
                      xl:text-3xl'> 
          Tu nueva
      </h3>

      <h3 className='text-lemon font-semibold text-xl ml-4
                      xs:text-xl
                      sm:text-5xl sm:ml-8
                      md:text-4xl md:-mt-4
                      lg:w-[60%] lg:mx-auto
                      xl:text-3xl'> 
          billetera virtual
      </h3>

      <article className="w-full bg-lemon flex flex-col items-center gap-y-4 absolute bottom-0 rounded-t-lg
                          lg:flex-row lg:gap-x-4 lg:items-center lg:justify-center">

    
        <a className="bg-white w-[90%] max-w-[450px] rounded-xl p-3 relative -top-6 cursor pointer
                       sm:w-[70%] sm:py-8
                       lg:w-[35%] 
                       " 
           href="./transferir">

        <h4 className="font-semibold text-lg relative after:content-[''] after:block after:w-[90%] after:h-[2px] after:bg-lemon after:rounded-lg after:mb-2 
        sm:text-xl sm:text-sm">  
         Transferi Dinero 
         </h4>

         <p className="text-xs sm:text-base"> 
          Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambien  recibir transferencias y nuclear tu capital en nuestra billetera virtual.
         </p>

        </a>

        <a className="bg-white w-[90%] max-w-[450px] rounded-xl p-3 relative -top-6 cursor pointer
                      sm:w-[70%] sm:py-8
                      lg:w-[35%] lg:h-[200px]" 
           href="./pagar">

         <h4 className="font-semibold text-lg relative after:content-[''] after:block after:w-[90%] after:h-[2px] after:bg-lemon after:rounded-lg after:mb-2 
        sm:text-xl sm:text-sm"> 
         Pago de Servicios
         </h4>

         <p className="text-xs sm:text-base"> 
          Paga mensualmente los servicios en 3 simples clicks, Facil, rapido y convieniente. 
          <br/>
          Olvidate de las facturas en papel.
         </p>

        </a>

        
        
      </article>

      

         
      
    

    </section>

  

    <FooterComponent />
  </main>
  )
}
