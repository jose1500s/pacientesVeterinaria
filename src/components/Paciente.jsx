export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="font-normal normal-case"> {nombre} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="font-normal normal-case"> {propietario} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="font-normal normal-case"> {email} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
                <span className="font-normal normal-case"> {fecha} </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                <span className="font-normal normal-case"> {sintomas} </span>
            </p>

            <div className="flex justify-evenly mt-6">
                <a href="" className="px-5 py-2.5 font-medium bg-indigo-600 hover:bg-blue-700  text-white rounded-lg text-base flex justify-center items-center gap-1 w-36"
                onClick={() => setPaciente(paciente)}
                >
                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                    Editar
                </a>

                <a href="" className="px-5 py-2.5 font-medium bg-red-600 hover:bg-red-700 text-white ounded-lg text-base flex justify-center items-center gap-1 w-36 rounded-md" 
                onClick={handleEliminar}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7.615 20q-.666 0-1.14-.475Q6 19.051 6 18.385V6h-.5q-.213 0-.356-.144T5 5.499q0-.212.144-.356Q5.288 5 5.5 5H9q0-.31.23-.54q.23-.23.54-.23h4.46q.31 0 .54.23q.23.23.23.54h3.5q.213 0 .356.144q.144.144.144.357q0 .212-.144.356Q18.713 6 18.5 6H18v12.385q0 .666-.475 1.14q-.474.475-1.14.475zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .356-.144q.144-.144.144-.356v-8q0-.213-.144-.356T10.307 8q-.213 0-.356.144t-.143.356v8q0 .213.144.356t.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356T13.692 8q-.213 0-.356.144q-.144.144-.144.356v8q0 .213.144.356t.357.144M7 6v13z"/></svg>
                    Eliminar
                </a>
            </div>
        </div>
    )
}