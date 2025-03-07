import React from 'react'

const NavBar = ({children})=> {
  return (
    <div className='w-full font-medium h-1/12 bg-white text-black text-lg flex items-center px-4'>{children}</div>
  )
}

export default NavBar