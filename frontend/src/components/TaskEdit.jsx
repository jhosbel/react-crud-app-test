import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TaskEdit = () => {

  const params = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  async function editTask (id){
    id.preventDefault()
    const task = {
      name: name,
      description: description
    }
    await fetch(`http://localhost:4000/api/edit/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response)=>response.json())
    .then((data) => {console.log('Updated:', data)})
    navigate('/')
  }

  return (
    <div className='tasksEdit'>
        <form>
            <h1>Agregar Tarea</h1>
            <h3>Titulo</h3>
            <input name='name' type="text" placeholder='Titulo' value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
            <h3>Descripcion</h3>
            <textarea name="description" id="" cols="40" rows="10" type="text" placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea> <br />
            <button type='submit' onClick={editTask}>Actualizar</button>
        </form>
    </div>
  )
}

export default TaskEdit