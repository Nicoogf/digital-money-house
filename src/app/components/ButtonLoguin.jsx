import React  from 'react' ;

const page = ( props ) => {
  return (
    
      <a href={`./${props.url}`} 
      className={`relative block text-center mx-auto items-center justify-center px-6 py-4 overflow-hidden font-bold  rounded-xl shadow-2xl group border-[2px] w-[80%] sm:w-[70%] md:w-[60%] max-w-[350px] 

      ${ props.color === "gris"  ? "text-greylight border-greylight  hover:text-greydark hover:border-greydark"
      :
     "text-lemon border-lemon hover:text-greydark hover:border-greydark "
      }
      
      ${ props.grid ? "col-span-2 sm:col-span-1 px-0 py-4 w-auto max-w-[350px]" : ""   
      }
      
      `}>

        <span className={`absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br

         ${ props.color === "gris"  ? "from-greylightdos via-greylight to-greylighttres"
        :  "from-lemonbold via-lemon to-lemondark"} group-hover:opacity-100`}>

        </span>

        {/* <!-- Top glass gradient --> */}
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

        {/*<!-- Bottom gradient --> */}
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

        {/*<!-- Left gradient -->}*/}
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

        {/*<!-- Right gradient --> */}
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>

        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>

        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

        <span className="relative"> 
              { props.opcion } 
              </span>

       </a>
    
   
  )
  }

export default page