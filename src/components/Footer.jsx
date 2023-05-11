import React from 'react'

const Footer = () => {
  return (
    <section className='relative px-5 py-4 '>
        <div className='h-16  bg-slate-100 rounded-t-2xl border-b-2 border-l-black'></div>
        <div className='h-3 bg-black  border'></div>
        <div className='h-16 bg-red-500 rounded-b-3xl border-black  border-2 '> </div>
        <div className='h-20  border-animate-spin  brightness-700 shadow-5xl aspect-square rounded-full cursor-pointer bg-red-400  border-[12px] border-black absolute bottom-11 left-1/2 -translate-x-1/2 after:content-[" "] after:h-10 after:aspect-square after:rounded-full after:bg-white-100 after:absolute after:border-[2px]  after:border-red-500 after:top-1/2 after:left-1/2  after:bg-red-200  after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse'></div>

    </section>
  )
}

export default Footer