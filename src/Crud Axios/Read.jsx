import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import "./read.css"

const Read = () => {
    const[data,setData]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id)
        .then(res=>setData(res.data))
        .then(err=>console.log(err))
    })
  return (
    <div className='read'>
        <section className='readsec'>
          <br />
        <h1>Reading A Data</h1>
        <br />
        <p><span><b>Name</b></span>:  &nbsp;&nbsp;{data.name}</p>
        <br />
        <p><span><b>Email</b></span>: &nbsp;&nbsp; {data.email}</p>
        <br />
        <Link to={`/update/${data.id}`}><button className='btnedit'>Edit</button></Link>
        <Link to={'/'}><button className='btndelete'>Back</button></Link>


        </section>
    </div>
  )
}

export default Read
