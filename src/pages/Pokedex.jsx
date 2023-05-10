import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/pokedex/Header'
import PokemonCard from '../components/pokedex/PokemonCard'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])


  const nameTrainer = useSelector(store => store.nameTrainer)
  useEffect (() =>  {
    const URL = "https://pokeapi.co/api/v2/pokemon"
    axios.get(URL)
    .then((res)=> setPokemons(res.data.results))
    .catch((err)=> console.log(err))

  
  }  ,[])

  return (
    <section className='min-h-screen '>
      <Header />

      {/* Filter Seccion  */}
      <section className='py-6 px-7'>
        <h3>Welcome {nameTrainer}, Here you can find your favorite Pokemon!</h3>

        <form action="">
          <div>
            <input type="text" placeholder='Search your Pokemon'/>
            <button>Search</button>
          </div>
          <select>
            <option value=""> All </option>
          </select>
        </form>
                 {/* Pokemon list Seccion  */}

        <section className='px-2'>

         {
          pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} /> )
        }
        </section>



      </section>
    
    </section>
  )
}

export default Pokedex