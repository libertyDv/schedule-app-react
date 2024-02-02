import React from 'react'
import '../styles/Inicio.css'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

function Inicio() {
  return (
    <div>
      <div className='divsInicio'>
        <div className='divTodos'>
          <h3>Todos</h3>
        </div>
        <div className='divTrabajo'>
          <h3>Trabajo</h3>
        </div>
        <div className='divPersonal'>
          <h3>Personal</h3>
        </div>
      </div>

      <div className='divTareas'>
        <div className='contenedorTarea'>
          <button className='botonDelete'>
            <DeleteIcon/>
          </button>
          <button className='botonDone'>
            <CheckIcon/>
          </button>
          <p>Nombre de la tarea</p>
        </div>
      </div>
    </div>
  )
}

export default Inicio
