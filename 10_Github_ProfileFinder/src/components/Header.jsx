import React from 'react'
import Toogle from './Toogle'

const Header = () => {
  return (
    <>
    <header className='flex flex-row justify-between md:justify-evenly font-mono mt-10 sm:mt-20'>
      <h1 className='font-extrabold text-white text-xl lg:text-3xl'>GitHub Profile Finder</h1>
    <Toogle/>
    </header>
    </>
  )
}

export default Header