import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'; // Paquete externo para generar id únicas en las tareas

function TareaFormulario() {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }
  
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNuea = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNuea);
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        classsName='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange= {manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
} 

export default TareaFormulario;