import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/pokedex/Header'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'


const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handlesubmit = (e) => {
      console.log()
    e.preventDefault()
    dispatch(setNameTrainer(e.target.nameTrainer.value))
    navigate('/pokedex')


}

  return (

    
    <section className=' min-h-screen grid grid-rows-[1fr_auto] items-center  '>

      <Header/>

      
        {/* Top Seccion */}
        <section className='px-5 py-28 flex justify-center'>
            <article className=' font-normal text-xl' >
                <div className=' max-w-[250px] sm:max-w-[700px] '>
                    <img src="/images/pokedex.png" alt="" />
                </div>
                <h2 className=' font-extrabold text-center text-red-600 text-5xl py-11'> Hello PokeLover !</h2>
                <p className=' text-3xl font-semibold text-center  text-neutral-800'> To start, Identify Yourself </p>
                 <form  className='m-4 flex justify-center'  onSubmit={handlesubmit}>
                    <input className='  rounded-l-xl border-4  border-slate-200 shadow-lg  m-2 text-3xl'   id='nameTrainer' type="text" placeholder='    Your Name......' />
                    <button className='   rounded-r-xl  border-red-500 border-4  bg-red-500 text-2xl items-center text-zinc-50 font-semibold'>  Start</button>
                 </form>

            </article >
     </section>

                {/* Footer */}
                < Footer />
                
    </section>
  )
}

export default Home