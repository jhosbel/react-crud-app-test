import React, {useState} from 'react'
import Tasks from './Tasks';
import User from './User';
import '../App.css'

const MainTasks = () => {

    const [lista, setLista] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

  return (
    <div className='Container'>
        <User 
          setLista={setLista} 
          name={name} 
          setName={setName} 
          description={description} 
          setDescription={setDescription}>
        </User>
        <Tasks lista={lista} setLista={setLista}></Tasks>
    </div>
  )
}

export default MainTasks