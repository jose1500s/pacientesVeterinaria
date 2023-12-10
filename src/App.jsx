import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  
  return (
    <div className='container mx-auto mt-16'>
      <Header />
      <div className='mt-12 md:flex'>
      <Formulario />
      <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
