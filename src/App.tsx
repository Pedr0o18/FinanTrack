/* Folhas de Estilos */
import './App.css'

/* React Router Dom */
import {BrowserRouter, Routes, Route} from "react-router-dom"

/* Páginas */
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )

}

export default App
