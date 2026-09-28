import React from 'react'

const Navbar = () => {
  return (
    <nav className=' fixed w-full bg-[#F9CF4F] top-0  flex px-6 py-3 items-center justify-between'>
        <p className='font-semibold text-xl'>Logo</p>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
        </ul>
        <p>Menu</p>
    </nav>
  )
}

export default Navbar