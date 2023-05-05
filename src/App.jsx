
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ProtectedAuth />}>

             <Route path='/pokedex' element={<Pokedex />}/>

        </Route>
       
      </Routes>

    </section>
  )
}

export default App
