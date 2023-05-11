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
    <section className=" ">

        <Header />
        <section className=" bg-zinc-100 rounded-3xl">
        <section className=" px-10 py-1 capitalize ">
            <article className="max-w-[900px] mx-auto">
                
                {/*Top seccion  */}
                <section >
                    <div>
                        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                </section>

                {/* General Information*/}
                <section>
                    <div>
                        <h3>#{pokemon?.id}</h3>
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                        <hr />
                        <h2 className=" capitalize font-bold">{pokemon?.name}</h2>
                    </div>

                    <div className="flex justify-center  gap-4 text-center ">
                        <div>
                            <h5>Weigth</h5>
                            <span className=" font-bold">{pokemon?.weight}</span>

                        </div>
                        <div>
                        <h5>Heigth</h5>
                            <span className=" font-bold">{pokemon?.height}</span>

                        </div>
                    </div>
                    </section>

                    <section className=" grid  sd:grid-cols-2 gap-4">
                        {/* types*/}
                        <section className="text-center">
                            <h3>Types</h3>
                            <section className="grid grid-cols-2 gap-4 mt-4">
                                {
                                    pokemon?.types.map(type => <article 
                                        className=" p-2 px-8 border-[1px]
                                         border-gray-300 " key={type.type.name}>{type.type.name}</article> )
                                }
                            </section>


                    </section>
                        {/* abilities*/}
                          <section className="text-center">
                            <h3>Abilities</h3>
                            <section className="grid grid-cols-2 gap-4 mt-4">
                                {
                                    pokemon?.abilities.map(ability => <article 
                                        className=" p-2 px-8 border-[1px]
                                         border-gray-300 " key={ability.ability.name}>{ability.ability.name}</article> )
                                }
                            </section>

                          </section>



                </section>


                {/*seccion de stats*/}
                <section>
                  <h3>Stats</h3>
                  <section className=" grid-cols-2 gap-2">
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
    </section>

  )
}

export default PokemonId