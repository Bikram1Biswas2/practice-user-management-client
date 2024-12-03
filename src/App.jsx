
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import UsersTable from './Components/UsersTable'

function App() {
const loadedData = useLoaderData()
const [users,setUsers]= useState(loadedData)

  return (
    <>
    
      <h1 className='text-3xl font-bold text-cyan-400'>Practice User Management:</h1>
     
     <p className='text-xl font-bold text-rose-400'>New Users:{users.length}</p>
       
      <div>
        <table className='table'>
        <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
        {
          users.map((user,idx)=> <UsersTable idx={idx}  user={user} key={user._id}></UsersTable>)
        }
      </div>
    </>
  )
}

export default App
