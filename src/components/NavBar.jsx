import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";

const NavBar = () => {  
  console.log('Navbar');
  return (
    <div className='nav-bar fixed w-full bg-white top-0 p-6 z-10'>
        <div className='flex items-center absolute top-10 left-10 max-md:top-[34px] max-md:left-[20px]'>
            <CgMenuRightAlt className='w-7 h-7'/>
            <span className='ml-1 text-[20px] max-sm:hidden'>Menu</span>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <img className='w-[35px] max-md:w-[30px] max-md:mb-[10px]' src="/newsbyte-icon.png" alt="newsbyte-icon" />
            <div className='flex'>
                <span className='text-[30px] max-md:text-[24px] max-md:first-letter:text-[34px] first-letter:text-blue-500 first-letter:text-[40px]'>News</span>
                <span className='text-[30px] max-md:text-[24px] max-md:first-letter:text-[34px] first-letter:text-blue-500 first-letter:text-[40px]'>Byte</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar