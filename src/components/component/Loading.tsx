import React from 'react'
import { infinity } from 'ldrs'

infinity.register()

const Loading = () => {
  return (
    <section className='w-full h-screen fixed flex justify-center items-center bg-white'>
        <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3" 
        color="black" 
        ></l-infinity>
    </section>
  )
}

export default Loading