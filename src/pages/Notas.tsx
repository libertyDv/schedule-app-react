import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../styles/Notas.css'


function Notas() {

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  
  return (
    <div>

      <button className='botonAdd2' onClick={openPopup}>
        <AddIcon />
      </button>

      {popupOpen && (
        <div className='popup2'>

          <textarea
            placeholder='Añadir nota'
            className='aniadirNota'></textarea>
          <br></br>

          <button onClick={closePopup}>Cerrar</button>
        </div>
      )}

    </div>
  )
}

export default Notas
