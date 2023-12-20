import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./create.css"

const Create = () => 
{
    const[values,setValues]=useState({name:"", email:""})

    const navigate=useNavigate()

    function handleSubmit(event)
    {
        event.preventDefault()
        axios.post("http://localhost:3000/users",values)
        .then(res=>{
            console.log(res)
            navigate('/')
        })

    }
  return (
          <div className='create'>
             <form>
              <br />
                 <h1>Create User Details</h1>
                 <br />
                 <input type="text" name='name' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder='Enter Your Name' />
                 <br />
                 <input type="email" name='email' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder='Enter Your Email' />
                 <br />
                 <br />
                 <button className='btnedit' onClick={handleSubmit} >Submit </button>
                 <Link to={'/'}><button className='btndelete'>Back</button></Link>
              </form>
           </div>
         )
}
export default Create
