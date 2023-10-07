import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

	const [tareas, setTareas] = useState();

	const agregarTarea = tarea => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas]; 
			setTareas(tareasActualizadas);		
		};
	}

	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}

	const completarTarea = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			setTareas(tareasActualizadas);
		});
	}

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
				{
					tareas.map((tarea) => //mapeo la lista de tareas y devuelvo un componente por cada tarea del array 
						<Tarea
							key= {tarea.id}
							texto= {tarea.texto}
							completada= {tarea.completada}
							completarTarea= {completarTarea}
							eliminarTarea= {eliminarTarea} 
						/>
						)
					}
  		</div>
    </>
  );
}