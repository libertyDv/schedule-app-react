import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendario.css'



function Calendario() {
  return (
    <div>
      <div className='calendario'>
        <Calendar />
      </div>
    </div>
  )
}

export default Calendario
