import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'


const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handlesubmit = (e) => {
      console.log(e.target.nameTrainer.value)
    e.preventDefault()
    dispatch(setNameTrainer(e.target.nameTrainer.value))
    navigate('/pokedex')


}

  return (
    <section className=' min-h-screen grid grid-rows-[1fr_auto] items-center  '>
        {/* Top Seccion */}
        <section className='px-5 py-28'>
            <article className=' font-normal text-xl' >
                <div className=' max-w-[250px] sm:max-w-[500px]  items-center '>
                    <img src="/images/pokedex.png" alt="" />
                </div>
                <h2 className=' font-extrabold text-justify text-red-600 text-5xl py-11'> Hellor trainer !</h2>
                <p className=' text-3xl font-semibold'> To start, Identify Yourself </p>
                 <form   onSubmit={handlesubmit}>
                    <input className=' border-solid border-stone-500 border-b-neutral-400'  id='nameTrainer' type="text" placeholder='Your Name...' />
                    <button className=' rounded-r-xl border-red-500 border-4  bg-red-500 text-2xl items-center'>Start</button>
                 </form>

            </article >
     </section>

                {/* Footer */}
                < Footer />
                
    </section>
  )
}

export default Home