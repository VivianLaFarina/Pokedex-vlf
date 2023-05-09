import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'


const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.nameTrainer.value))
    navigate('/pokedex')







}

  return (
    <section className=' min-h-screen grid grid-rows-[1fr_auto]'>
        {/* Top Seccion */}
        <section>
            <article>
                <div>
                    <img src="/images/pokedex.png" alt="" />
                </div>
                <h2>Hellor trainer !</h2>
                <p> To start, Identify Yourself </p>
                 <form onSubmit={handlesubmit}>
                    <input id='nameTrainer' type="text" placeholder='Your Name...' />
                    <button>start</button>
                 </form>

            </article >
        </section>
                {/* Footer */}
                < Footer />
                
    </section>
  )
}

export default Home