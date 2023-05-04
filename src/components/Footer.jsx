import React from 'react'

const Footer = () => {
  return (
    <section className=' relative'>
        <div className='h-16 bg-red-600'></div>
        <div className='h-5 bg-black'></div>
        <div className='h-16 bg-slate-100'> </div>
        <div className='h-20 aspect-square rounded-full bg-white border-[12px] border-black absolute bottom-9 left-1/2 -translate-x-1/2 after:content-[" "] after:h-9 after:aspect-square after:rounded-full after:bg-slate-100 after:absolute after:border-[2px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:hover:animate-pulse '></div>

    </section>
  )
}

export default Footer