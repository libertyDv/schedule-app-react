import React, { useState } from 'react'
import '../styles/Inicio.css'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function Inicio() {

  const [popupOpen, setPopupOpen] = useState(false);

  const [tasks, setTasks] = useState(["tarea1", "tarea2"])
  const [newTasks, setNewTask] = useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTasks])
      setNewTask({
        nombre: '',
        subtarea: '',
        fechaLimite: '',
        categoria: ''
      }) 
      closePopup();
    }
  }


  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }



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
        <div className='divOtros'>
          <h3>Otros</h3>
        </div>
      </div>

      <div className='divTareas'>
        {tasks.map((task, index) => (
          <div className='contenedorTarea' key={index}>
            <button className='botonDelete' onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </button>
            <button className='botonDone'>
              <CheckIcon />
            </button>
            <p>{task}</p>
          </div>
        ))}
      </div>


      <button className='botonAdd' onClick={openPopup}>
        <AddIcon />
      </button>

      {popupOpen && (
        <div className='popup'>

          <input
            type='text'
            placeholder='Nombre de la tarea'
            value={newTasks}
            onChange={handleInputChange}

          ></input>
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

          <button className="add-button"
            onClick={addTask}>
            Añadir
          </button>
          <br></br>
          <br></br>
          <button onClick={closePopup}>Cancelar</button>
        </div>
      )}
    </div>
  )
}

export default Inicio
