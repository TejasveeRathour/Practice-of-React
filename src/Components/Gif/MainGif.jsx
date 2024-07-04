import React from 'react'
import Random from './Random';
import Tag from './Tag';

const MainGif = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative items-center overflow-x-hidden bg-blue-100'>
        <h1 className=' bg-white rounded-md w-11/12 text-center mt-[40px]
         px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
        <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'></div>
        <Random />
        <Tag />
    </div>
  )
}

export default MainGif
