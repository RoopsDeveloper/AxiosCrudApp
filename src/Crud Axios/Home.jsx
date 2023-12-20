
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios' 
import "./home.css"


const Home = () => {
    const[data,setData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setData(res.data))
    })
    function handleDelete(id){
        axios.delete("http://localhost:3000/users/"+id)
        .then(res=>{
            console.log(res)
            navigate('/')
        })
    }
  return (
    <div className='home'>
        <aside>
            <h1>User Lists</h1>
            <Link to={'/create'}><button>Add+</button></Link>
        </aside>
        <br />
        <hr />
        <table>
            <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Email</b></td>
                    <td><b>Action</b></td>
                </tr>
            </thead>
            
            <tbody>
                {data.length>0 && data.map((user,index)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>

                                <Link to={`/read/${user.id}`}> <button>Read</button></Link>
                                <Link to={`/update/${user.id}`}><button className='btnedit'>Edit</button></Link>

                                <button className='btndelete' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
      
    </div>
  )
}

export default Home
