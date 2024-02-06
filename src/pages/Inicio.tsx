import React, { useState } from 'react'
import '../styles/Inicio.css'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function Inicio() {

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
            <DeleteIcon />
          </button>
          <button className='botonDone'>
            <CheckIcon />
          </button>
          <p>Nombre de la tarea</p>
        </div>
      </div>

      <button className='botonAdd' onClick={openPopup}>
        <AddIcon />
      </button>

      {popupOpen && (
        <div className='popup'>

          <input
            type='text'
            placeholder='Nombre de la tarea'></input>
          <br></br>

          <input
            type='text'
            placeholder='Añadir subtarea'></input>
          <br></br>

          <input
            type='date'
            placeholder='Fecha límite'></input>
          <br></br>

          <label htmlFor="categoria">Categoria:</label>
          <select id="categoria">
            <option value="trabajo">Trabajo</option>
            <option value="personal">Personal</option>
            <option value="otra">Otra</option>
          </select>

          <button onClick={closePopup}>Cerrar</button>
        </div>
      )}
    </div>
  )
}

export default Inicio
