import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Tasks = (props) => {
    const navigate = useNavigate()
    const lista = props.lista
    const setLista = props.setLista
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/')
            const data = await response.json()
            console.log(data)
            setLista(data)
        }
        fetchData()
    }, [])

    //Delete Tasks

    async function deleteTasks(id){
            await fetch(`http://localhost:4000/api/delete/${id}`, {
            method: 'DELETE',
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        setLista( prev => prev.filter(task => task._id !== id))//Para actualizar la pantalla
    }

    return(
        <div className='tasksContainer'>
            <h1>Tareas</h1>
            {
                lista.map(item => {
                    return(
                        <div className='tasks' key={item._id}>
                            <h2>Titulo: {item.name}</h2>
                            <hr />
                            <h2>Description:</h2>
                            <h3>{item.description}</h3>
                            <div className='btn-container'>
                                <h2 className='btn' onClick={()=>deleteTasks(item._id)}>Borrar</h2>
                                <h2 className='btn' onClick={() => navigate(`/edit/${item._id}`)}>Editar</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tasks

