import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import store from "../../store"

const ProtectedAuth = () => {

 const nameTrainer= useSelector((store)=> store.nameTrainer)

if(nameTrainer){
    return <Outlet />
}


  return (
    <div>ProtectedAuth</div>
  )
}

export default ProtectedAuth