import React from 'react'

const Footer = () => {
  return (
    <section className='relative px-5 py-4  '>
        <div className='h-16  bg-red-600 rounded-t-2xl'></div>
        <div className='h-3 bg-black '></div>
        <div className='h-16 bg-slate-100 rounded-b-3xl hover:border-red-700 '> </div>
        <div className='h-20 hover:border-animate-spin  brightness-700 shadow-2xl aspect-square rounded-full cursor-pointer hover:bg-red-500 bg-slate-100 border-[12px] border-black absolute bottom-11 left-1/2 -translate-x-1/2 after:content-[" "] after:h-10 after:aspect-square after:rounded-full after:bg-white-100 after:absolute after:border-[2px] after:border-stone-900 after:hover:border-red-700 after:top-1/2 after:left-1/2  after:hover:bg-red-300  after:-translate-x-1/2 after:-translate-y-1/2 after:hover:animate-pulse'></div>

    </section>
  )
}

export default Footer