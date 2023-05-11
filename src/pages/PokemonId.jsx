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
    const percentBarProgress = Math.floor((stat_base * 100)/280)
    return `${percentBarProgress}%`

}

  return (
    <section>
        <Header />
        <section className=" px-10 py-10 capitalize ">
            <article>
                
                {/*Top seccion  */}
                <section >
                    <div>
                        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                </section>


                {/*seccion de stats*/}
                <section>
                  <h3>Stats</h3>
                  <section>
                    {    
                      pokemon?.stats.map(stat => (
                        <article  key={stat.stat.name}>
                            <section className="flex justify-between">
                                <h5 className="">{stat.stat.name}</h5>
                                <span>{stat.base_stat}/250</span>
                            </section>
                            <div className="bg-gray-200 h-6 rounded-lg ">
                                <div style={{"width": getPercentStatBar(stat.base_stat)}} className={`h-full bg-gradient-to-r from-yellow-50 to-yellow-300`}></div>
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