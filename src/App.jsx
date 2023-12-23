import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { Toaster } from 'sonner';

function App() {
  
  return (
    <div className='container mx-auto mt-14'>
      <Header />
      <div className='mt-8 md:flex'>
      <Formulario />
      <ListadoPacientes />
      </div>
      <Toaster position="bottom-center" richColors closeButton  />
    </div>
  )
}

export default App
