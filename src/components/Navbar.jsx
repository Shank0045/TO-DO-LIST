import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-between bg-linear-130 from-purple-500 to-purple-700'> <h1 className='font-sans p-[20px]  cursor-pointer text-[20px] font-[800] hover:text-[24px] transition-all duration-[0.3s] ' >TO-DO-LIST</h1>   <ul className='  cursor-pointer text-[20px] font-[800] flex p-[20px] gap-[40px]'>
        
         <li className='hover:text-[24px] transition-all duration-[0.3s]'>HOME</li>


         
         </ul> 
         
         
         </div>
  )
}

export default Navbar