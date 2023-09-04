import { useState } from "react";


let tareas = [
    {id:1, nombre:"Viajar por el mundo" , done:false},
    {id:2, nombre:"Ganarse la loteria" , done:false},
    {id:3, nombre:"Comprar dolare" , done:false}
]

function ToDoList(props){
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item active">Lista de Pendientes</li>
                { // las llaves pasan de modo JSX a modo JS
                    tareas.map((tarea)=>{
                        return <li key={tarea.id} className="list-group-item"> {tarea.nombre}</li>
                    })
                }
            </ul>
        </div>
 
       
    )

    

}

export default ToDoList
