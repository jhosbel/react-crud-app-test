import React from 'react'
import '../App.css'

const User = ({setLista, name, setName, description, setDescription}) => {

  //Add a new Task
  function addTask(e) {
    e.preventDefault()
    const tasks = {
      name,
      description
    }
    console.log(tasks)
    fetch('http://localhost:4000/api/create', {
      method: 'POST',
      body: JSON.stringify(tasks),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response)=>response.json())
    .catch(error => console.log(error))
    setName('')
    setDescription('')
    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/')
      const data = await response.json()
      console.log(data)
      setLista(data)
  }
  fetchData()
  }


  return (
    <div className='user'>
        <form>
            <h1>Agregar Tarea</h1>
            <h3>Titulo</h3>
            <input name='name' type="text" placeholder='Titulo' value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
            <h3>Descripcion</h3>
            <textarea name="description" id="" cols="40" rows="10" type="text" placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea> <br />
            <button type='submit' onClick={addTask}>Agregar</button>
        </form>
    </div>
  )
}

export default User