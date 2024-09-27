import React from 'react'
import { infinity } from 'ldrs'

infinity.register()

const Loading = () => {
  return (
    <section className='w-full h-screen fixed flex flex-col justify-center items-center bg-white gap-2 -z-10'>
        <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3" 
        color="black" 
        ></l-infinity>
        <h1 className='text-xl font-bold'>ИИ подбирает вам аромат</h1>
    </section>
  )
}

export default Loading