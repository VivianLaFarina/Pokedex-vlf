import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/pokedex/Header"

const PokemonId = () => {
    const [pokemon, setPokemon] = useState()
    
    const {id} = useParams()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`

    axios.get(URL)
    .then((res)=> setPokemon(res.data))
    .catch((err)=> console.log(err))
},[])

const getPercentStatBar = (stat_base) => {

}

  return (
    <section>
        <Header />
        <section className=" px-10 py-10 capitalize ">
            <article>
                
                {/* Todo lo demasa */}
                {/*seccion de stats*/}
                <section>
                  <h3>Stats</h3>
                  <section>
                    {    
                      pokemon?.stats.map(stat => (
                        <article key={stat.stat.name}>
                            <section className="flex justify-between">
                                <h5 className="">{stat.stat.name}</h5>
                                <span>{stat.base_stat}/200</span>
                            </section>
                            <div className="bg-gray-100 h-6 rounded-lg ">
                                <div className="h-full w-1/2 bg-gradient-to-r from-yellow-300 to-yellow-500"></div>
                            </div>


                        </article>
                      ))
                    }
                    </section>
                </section>


            </article>
        </section>

    </section>
  )
}

export default PokemonId