import axios from "axios"
import { useState, useEffect } from "react"


const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState()

  const types = pokemon?.types.slice(0, 2).map(type => type.type.name).join(" / ")

  useEffect(() => {
    axios.get(pokemonUrl)
    .then((res)=> setPokemon(res.data))
    .catch((err)=> console.log(err))

  },[])

  return (
    <article className="text-center border-8 border-green-300 border-double">


    {/* Top Seccion  */}

      <section className="bg-gradient-to-b from-green-400 to-yellow-100 ">
        <div>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </section>

   {/* Top Seccion */}
      <section>
        <h3>{pokemon?.name}</h3>
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