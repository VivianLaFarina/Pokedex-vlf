import axios from "axios"
import { useState, useEffect } from "react"

const bordersByType = {
  grass: 'border-green-500',
  fire: 'border-red-600',
  water: 'border-Sky-500',
  electric: 'border-yellow-300',
  ice: 'border-purple-500',
  fighting: 'border-pink-500',
  poison: 'border-purple-900',
  ground: 'border-yellow-500',
  flying: 'border-blue-500',
  psychic: 'border-pink-500',
  bug: 'border-green-500',
  rock: 'border-blue-500',
  ghost: 'border-purple-500',
  dragon: 'border-orange-500',
  dark: 'border-red-500',
  steel: 'border-yellow-500',
  fairy: 'border-pink-500',
}

bordersByType["grass"]

const backgroundByType = {
  grass:  'from-green-400 to-yellow-100',
  fire: ' from-red-400 to-orange-300',
  water: ' from-sky-400 to-cyan-100',
  electric: ' from-yellow-300 to-yellow-50',
  ice: ' from-blue-700 to-cyan-50',
  fighting: ' from-orange-700 to-yellow-400',
  poison: ' from-purple-800 to-violet-200',
  ground: ' from-yellow-400 to-yellow-100',
  flying: ' from-amber-400 to-amber-100',
  psychic: ' from-pink-400 to-yellow-100',
  bug: ' from-green-400 to-yellow-100',
  rock: ' from-blue-400 to-yellow-100',
  ghost: ' from-purple-400 to-yellow-100',
  dragon: ' from-pink-400 to-yellow-100',
  dark: ' from-red-400 to-yellow-100',
  steel: ' from-yellow-400 to-yellow-100',
  fairy: ' from-pink-400 to-yellow-100',
}

const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState()

  const types = pokemon?.types.slice(0, 2).map(type => type.type.name).join(" / ")

  useEffect(() => {
    axios.get(pokemonUrl)
    .then((res)=> setPokemon(res.data))
    .catch((err)=> console.log(err))

  },[])

  return (
    <article className={`text-center border-8 rounded-lg border-green-300 border-double ${bordersByType[pokemon?.types[0].type.name]} `}>


    {/* Top Seccion  */}

      <section className={`bg-gradient-to-b ${backgroundByType[pokemon?.types[0].type.name]} relative  h-[150px] `}>
        <div className="absolute -bottom-16 w-[200px] left-1/2 -translate-x-1/2 " >
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </section>

   {/* Button Seccion */}
      <section>
        <h3 className="mt-16 ">{pokemon?.name}</h3>
        <h4>{types}</h4>
        <span>Type</span>

        <hr />

        <section className="grid grid-cols-3 gap-3 p-2"> {pokemon?.stats.map(stat => (
              <div key={stat.stat.name}>
                <h5>{stat.stat.name}</h5>
                <samp>{stat.base_stat}</samp>
              </div>
            ))
          }
        </section>

      </section>

    </article>
  )
}

export default PokemonCard