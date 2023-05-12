import axios from "axios"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from "../components/Footer"
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
    const POKEMONS_PER_PAGE = 9

    const sliceStart = (currentPage -1 ) * POKEMONS_PER_PAGE

    const sliceEnd = sliceStart + POKEMONS_PER_PAGE

    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)

     const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

     const PAGES_PER_BLOCK = 2

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
  
  const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1
    if(newCurrentPage >= 1){
      setCurrentPage(newCurrentPage)
    }
  }

  const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1
    if (newCurrentPage <= lastPage){
      setCurrentPage(newCurrentPage)
    }
  }

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

  useEffect (() => {
    setCurrentPage(1)
  },[pokemonName, currentType])

  return (

    <section className='min-h-screen p-6   '>
      <Header />

      {/* Filter Seccion  */}
      <section className='py-5  '>
        <h3 className=" text-center text-3xl text-gray-600 font-medium">Welcome {nameTrainer}, here you can find your favorite Pokemon!</h3>

        <form  className="px-10 flex justify-center gap-4 m-8  " onSubmit={handleSubmit}>
          <div className=" border-4 rounded-xl text-gray-100 text-2xl flex gap-1">
            <input className=" bg-white p-1 text-l"
              id="pokemonName"
              type="text"
              placeholder="Search your Pokemon" />
            <button className=" rounded-r-lg text-white  bg-red-500 p-2">  Find</button>
          </div>

          <select className=" text-2xl capitalize  rounded-xl b  bg-red-500 text-center text-white " onChange={(e) => setCurrentType(e.target.value)}>
            <option  value="">All</option>
              {types.map((type) => ( 
              <option   value={type} key={type}>
                {type}
              </option>
              ))}
          </select>
        </form>
      </section>





      {/* Pokemon list Seccion  */}
      <section className="px-8 py-10 grid gap-6 m:grid-cols-[280px]">
        {
          pokemonInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        }
      </section>
            {/* Pagination*/}

            <ul className="flex gap-2 justify-center py-4 px-2 flex-wrap ">
        {/*  Pagination list */}


        <li  onClick={() => setCurrentPage(1) } className="p-3 bg-red-600 font-bold text-white rounded-xl  cursor-pointer">{"<<"}</li>
        <li  onClick={ handleClickPreviusPage} className="p-3 bg-red-600 font-bold text-white rounded-xl  cursor-pointer">{"<"}</li>
        {

          pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`p-3 bg-red-600 font-bold text-white rounded-xl  cursor-pointer ${numberPage == currentPage && "bg-red-400"}`} key={numberPage}>{numberPage}</li>)
        }
        
         {/*  Last Page */}
       

        <li  onClick = {handleClickNextPage} className="p-3 bg-red-600 font-bold text-white rounded-xl  cursor-pointer">{">"}</li>
        <li onClick={() => setCurrentPage (lastPage)} className="p-3 bg-red-600 font-bold text-white rounded-xl  cursor-pointer">{">>"}</li>
      </ul>
      <section>
        {/* foter */}

      </section>
      <Footer />

    </section>
  )
}

export default Pokedex