import { useState, useEffect} from "react"
import { toast } from 'sonner';

export default function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    useEffect( () => {
      if( Object.keys(paciente).length > 0) {
        console.log(paciente)
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
    }, [paciente])

    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      //validacion inputs
      if([nombre, propietario, email, fecha, sintomas].includes('')) {
        toast.error('Todos los campos son obligatorios')
      } else {

      //objeto paciente
      const objetoPaciente = {
        nombre, // no se necesita llave-valor, pq se llaman igual, js lo detecta
        propietario, 
        email, 
        fecha, 
        sintomas
      }

      if(paciente.id) {
        //editando
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados)
        setPaciente({})
        toast.success('Editado con exito')
      } else {
        //nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
        toast.success('Registrado con exito')
      }
        
      //reiniciar formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    
      
      }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y 
            <span className="text-indigo-600 font-bold text-lg"> Administralos</span>
          </p>

          <form  onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
            <div className="mb-5">
              <label htmlFor="mascotaNombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
              <input id="mascotaNombre" type="text" placeholder="Nombre de la mascota"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               value={nombre}
               onChange={(e) =>  setNombre(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietarioNombre" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
              <input id="propietarioNombre" type="text" placeholder="Nombre del propietario"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               value={propietario}
               onChange={(e) =>  setPropietario(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
              <input id="email" type="email" placeholder="Email de contacto"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               value={email}
               onChange={(e) =>  setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
              <input id="fechaAlta" type="date" placeholder="Fecha de Alta"
               className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               value={fecha}
               onChange={(e) =>  setFecha(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
              <textarea name="sintomas" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e) =>  setSintomas(e.target.value)}
              />
            </div>

            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value={paciente.id ? "Guardar cambios" : "Agregar paciente"}
            />
          </form>
        </div>
    )
}