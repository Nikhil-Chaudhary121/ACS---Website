import React from 'react'
import Navbar from '../components/Navbar'

const HeroSection = () => {
  return (
    <div className='relative w-screen h-screen bg-[#F9CF4F]'>
      <Navbar/> 
      <div className=' h-screen py-30 px-20 flex  '>
        <div className='flex-1 flex overflow-none flex flex-col justify-between '>
            <p className=' leading-[1.6em] text-semibold text-[3vw] tracking-[-0.08em] '>Advance Construction <br /> <span className='tracking-[-0.08em] text-[8vw]'>SPARES</span></p>
          <div>
            <p>sdfdfdfdfdgdf</p>
          </div>
        </div>
        <div className='flex-1 py-10'>
          <div className='w-[150px] h-2 bg-[#121212]'></div>
          <div className=' text-[2vw] leading-[1.2em] tracking-[-0.08em]'>
            Find high-Quality <br />
           <span className=' text-[3vw]'>SPARE PARTS</span>
          </div>
          <div className='w-[300px] items-center text-xl font-semibold justify-center flex rounded-xl h-[60px] bg-white'>
            Explore More
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection