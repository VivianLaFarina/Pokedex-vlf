import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/pokedex/Header"


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

const textByType = {
    grass: 'text-green-500',
    fire: 'text-red-600',
    water: 'text-sky-500',
    electric: 'text-yellow-100',
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
    <section className="  capitalize truncate">

        <Header />

        <section className=" px-8 py-14   ">
            <article className="max-w-[700px] mx-auto shadow-2xl pb-4 rounded-lg ">
                
                {/*Top seccion  */}
                <section  className={`bg-gradient-to-t rounded-md  ${backgroundByType[pokemon?.types[0].type.name]} relative  h-[190px] `}>
                    <div className=" w-[250px] mx-auto absolute left-1/2 -translate-x-1/2 -top-20  ">
                        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                    </div>
                </section>

                {/* General Information*/}
                <section className="px-24 ">
                    <div className="text-center ">
                        <h3 className=" text-center border-gray-200 border-2 mt-8  "># {pokemon?.id}</h3>
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] ">
                        <hr />
                        <h2 className={` font-bold m-6  text-xl  ${textByType[pokemon?.types[0].type.name]}`} >{pokemon?.name}</h2>
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

                    <section className=" grid  sd:grid-cols-2 gap2">
                        {/* types*/}
                        <section className="text-center m-4 font-medium">
                            <h3>Types</h3>
                            <section className="grid grid-cols-2 gap-4 mt-2 ">
                                {
                                    pokemon?.types.map(type => <article 
                                        className={` bg-gradient-to-t p-2 px-8 border-[1px]
                                         border-gray-300 ${backgroundByType[type.type.name]} ` }key={type.type.name}>{type.type.name}</article> )
                                }
                            </section>


                    </section>
                        {/* abilities*/}
                          <section className="text-center px-4">
                            <h3>Abilities</h3>
                            <section className="grid grid-cols-2 gap-4 mt-2">
                                {
                                    pokemon?.abilities.map(ability => <article 
                                        className=" p-2 px-8 border-[1px]
                                         border-gray-300 " key={ability.ability.name}>{ability.ability.name}</article> )
                                }
                            </section>

                          </section>



                </section>


                {/*seccion de stats*/}
                <section className=" px-2  ">
                  <h3 className="font-bold capitalize text-xl  py-10 text-center">Stats</h3>
                  <section className=" grid-cols-2 gap-1 p-3 font-medium border-2 rounded-md">
                    {    
                      pokemon?.stats.map(stat => (
                        <article  key={stat.stat.name}>
                            <section className="flex justify-between">
                                <h5 className=" px-2 py-1">{stat.stat.name}</h5>
                                <span className=" font-light">{stat.base_stat}/250</span>
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