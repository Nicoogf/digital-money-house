import React  from 'react' ;

const Page = ( prop ) => {
  return (
    <div> 
        <a href="#_" className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold  rounded-md shadow-2xl group border-[2px]

        ${ prop.color === "gris"  ? "text-greylight border-greylight  hover:text-greydark hover:border-greydark"
        :
       "text-lemon border-lemon hover:text-greydark hover:border-greydark"
        }`}>
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-greylightdos via-greylight to-greylightres group-hover:opacity-100 "></span>
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
        <span className="relative">Button Text</span>
        </a>
    </div> 
   
  )
  }

export default Page ;