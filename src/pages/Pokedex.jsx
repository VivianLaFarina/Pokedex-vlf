import axios from "axios"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/pokedex/Header'
import PokemonCard from '../components/pokedex/PokemonCard'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("")
  const [currentPage, setCurrentPage] = useState([1])

  

  const nameTrainer = useSelector(store => store.nameTrainer);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value);

  }

  const pokemonsByName = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))

  const paginationLoginc = () => {
    //pokemon x page
    const POKEMONS_PER_PAGE = 16

    const sliceStart = (currentPage -1 ) * POKEMONS_PER_PAGE

    const sliceEnd = sliceStart + POKEMONS_PER_PAGE

    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)

     const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

     const PAGES_PER_BLOCK = 5

     const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

     const pagesInBlock = []

     const minPage = (actualBlock -1) * PAGES_PER_BLOCK + 1
     const maxPage  = actualBlock * PAGES_PER_BLOCK
     for (let i = minPage; i <= maxPage; i++){
      if (i <= lastPage){
      pagesInBlock.push(i) 
     }
  }
  return {pokemonInPage, lastPage, pagesInBlock}
}

  const {lastPage, pagesInBlock, pokemonInPage} = paginationLoginc ()

  useEffect(() => {
    if(!currentType){
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";

    axios
    .get(URL)
    .then((res) => setPokemons(res.data.results))
    .catch((err) => console.log(err));}
  }, [currentType]);

  
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";

    axios.get(URL)
      .then((res) => {
        const newTypes = res.data.results.map((type) => type.name);
        setTypes(newTypes);
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    if(currentType){
      const URL = `https://pokeapi.co/api/v2/type/${currentType}/`;

    axios
      .get(URL)
      .then((res) => {
        console.log(res)
        const pokemonsByType = res.data.pokemon.map(pokemon =>
          pokemon.pokemon)
          setPokemons(pokemonsByType);
      })
      .catch((err) => console.log(err));
      }
  }, [currentType]);


  return (
    <section className='min-h-screen'>
      <Header />

      {/* Filter Seccion  */}
      <section className='py-6 px-7'>
        <h3>Welcome {nameTrainer}, here you can find your favorite Pokemon!</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="pokemonName"
              type="text"
              placeholder="Search your Pokemon" />
            <button>Search</button>
          </div>

          <select className=" capitalize" onChange={(e) => setCurrentType(e.target.value)}>
            <option value="">All</option>
              {types.map((type) => ( 
              <option  className="capitalize" value={type} key={type}>
                {type}
              </option>
              ))}
          </select>
        </form>
      </section>

      {/* pagination*/}

      <ul className="flex gap-2 justify-center py-4">
        {

          pagesInBlock.map(numberPage => <li className="p-3 bg-red-600 font-bold text-white rounded-md  cursor-pointer" key={numberPage}>{numberPage}</li>)
        }
      </ul>



      {/* Pokemon list Seccion  */}
      <section className="px-2 py-10 grid gap-6 grid-cols-[280px]">
        {
          pokemonInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        }
      </section>

    </section>
  )
}

export default Pokedex