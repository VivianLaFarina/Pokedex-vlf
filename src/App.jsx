
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

    </section>
  )
}

export default App
