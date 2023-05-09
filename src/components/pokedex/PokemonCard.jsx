import axios from "axios"
import { useEffect } from "react"

const PokemonCard = ({pokemonUrl}) => {

  useEffect(()=> {
    axios.get(pokemonUrl)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))

  },[])

  return (
    <div>PokemonCard</div>
  )
}

export default PokemonCard