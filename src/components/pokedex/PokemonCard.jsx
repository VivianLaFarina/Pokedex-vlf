import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const bordersByType = {
  grass: 'border-green-500',
  fire: 'border-red-600',
  water: 'border-sky-500',
  electric: 'border-yellow-100',
  ice: 'border-cyan-300',
  fighting: 'border-yellow-500',
  poison: 'border-purple-900',
  ground: 'border-zinc-500',
  flying: 'border-yellow-200',
  psychic: 'border-fuchsia-500',
  bug: 'border-green-800',
  rock: 'border-zinc-600',
  ghost: 'border-purple-950',
  dragon: 'border-orange-700',
  dark: 'border-violet-900',
  steel: 'border-slate-400',
  fairy: 'border-pink-500',
  normal: 'border-yellow-300',
}

bordersByType["grass"]

const backgroundByType = {
  grass:  'from-green-400 to-yellow-100',
  fire: ' from-red-400 to-orange-100',
  water: ' from-sky-400 to-cyan-50',
  electric: ' from-yellow-200 to-yellow-50',
  ice: ' from-blue-700 to-cyan-50',
  fighting: ' from-orange-700 to-yellow-400',
  poison: ' from-purple-800 to-violet-200',
  ground: ' from-neutral-500 to-stone-200',
  flying: ' from-amber-400 to-amber-100',
  psychic: ' from-fuchsia-400 to-pink-100',
  bug: ' from-green-700 to-teal-50',
  rock: ' from-zinc-700 to-slate-100',
  ghost: ' from-purple-800 to-slate-300',
  dragon: ' from-orange-400 to-red-300',
  dark: ' from-purple-800 to-indigo300',
  steel: ' from-slate-400 to-slate-100',
  fairy: ' from-pink-400 to-yellow-100',
  normal: ' from-amber-500 to-amber-300',
}

const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState()

  const types = pokemon?.types.slice(0, 2).map(type => type.type.name).join(" / ")

  useEffect(() => {
    axios
    .get(pokemonUrl)
    .then((res)=> setPokemon(res.data))
    .catch((err)=> console.log(err));

  },[]);

  return (
    <Link to= {`/pokedex/${pokemon?.id}`} className={` p-2 text-center border-8 rounded-lg border-green-300 border-double ${bordersByType[pokemon?.types[0].type.name]}`}>


    {/* Top Seccion  */}

      <section className={`bg-gradient-to-b rounded-md   ${backgroundByType[pokemon?.types[0].type.name]} relative  h-[150px] `}>
        <div className="absolute -bottom-15 w-[220px] left-1/2 -translate-x-1/2  " >
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </section>

   {/* Button Seccion */}
      <section>
        <h3 className="mt-16 capitalize">{pokemon?.name}</h3>
        <h4 className=" capitalize">{types}</h4>
        <span>Type</span>

        <hr />

        <section className="grid grid-cols-3 gap-3 p-2 capitalize"> {pokemon?.stats.map(stat => (
              <div key={stat.stat.name}>
                <h5>{stat.stat.name}</h5>
                <samp>{stat.base_stat}</samp>
              </div>
            ))
          }
        </section>

      </section>

    </Link>
  )
}

export default PokemonCard