import React from 'react'
import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <>

    <div className='w-full flex justify-center relative'>
        <input className=' p-4 pr-12 bg-gray-800 shadow-md rounded-lg outline-none text-gray-400 w-2/4 mt-5 placeholder:text-gray-500 '
        type="text"
        placeholder='Search Github username....'
         />
         <span className="text-white absolute top-1/2 right-1/4 px-8 cursor-pointer" >
         <i className="fas fa-search" ></i>
         </span>
   
    </div>
    </>
  )
}

export default Input