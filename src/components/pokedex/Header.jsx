import React from 'react'

const Header = () => {
  return (
    <section className='relative px-5 py-4  '>
        <div className='h-16  bg-red-600 rounded-t-2xl grid items-end'>
            <div className='max-w-[205px] sm:max-w-[300px] px-1 '>
                <img src="/images/pokedex.png" alt="" />
            </div>
        </div>

        <div className='h-4 bg-black '></div>
        
        <div className='h-14 bg-slate-100 rounded-b-xl hover:border-red-700 '> </div>
        <div className='h-16 hover:border-animate-spin  brightness-700 shadow-2xl aspect-square 
        rounded-full cursor-pointer hover:bg-red-500 bg-slate-100 border-[10px] border-black 
        absolute bottom-14 right-0 -translate-x-1/2 after:content-[" "] after:h-8 
        after:aspect-square after:rounded-full after:bg-white-100 after:absolute after:border-[1px]
         after:border-stone-900 after:hover:border-red-700 after:top-1/2 after:left-1/2 
          after:hover:bg-red-300  after:-translate-x-1/2 after:-translate-y-1/2 
          after:hover:animate-pulse'></div>

    </section>
  )
}

export default Header