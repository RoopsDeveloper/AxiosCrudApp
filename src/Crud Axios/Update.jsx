import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import "./update.css"


const Update = () => 
{
    const{id}=useParams()
    const[values,setValues]=useState({name:"",email:""})

    const navigate=useNavigate()

    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${id}`)
      .then((res)=>setValues(res.data))
      .catch((err)=>console.log(err))
    },[id])

    const handleSubmit = () => {
      axios.put(`http://localhost:3000/users/${id}`, values)
        .then((res) => {
          console.log(res);
          navigate('/');
        })
        .catch((err) => console.log(err));
    };
  
    
   

    
  return (
            <div className='update'>
              <form>
                <br />
                 <h1>Update User Details</h1>
                 <br />
                 <input type="text" value={values.name} name='name' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
                 <br />
                 <input type="email" value={values.email} name='email' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
                 <br />
                 <br />
                 <button className='btnedit' onClick={handleSubmit}>Submit </button>
                 <Link to={'/'}><button className='btndelete'>Back</button></Link>
              </form>
             </div>
          )
}
export default Update
