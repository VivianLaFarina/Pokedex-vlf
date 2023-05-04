import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className=' min-h-screen grid grid-rows-[1fr_auto]'>
        {/* Top Seccion */}
        <section>
            <article>
                <div>
                    <img src="/images/pokedex.png" alt="" />
                </div>
                <h2>Hellor trainer</h2>
                <p>To start, Identify Yourself </p>
                 <div>
                    <input type="text" placeholder='Your Name...' />
                    <button>start</button>
                 </div>

            </article>
        </section>
                {/* Footer */}
                < Footer />
                
    </section>
  )
}

export default Home