import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Crud Axios/Home"
import Read from "./Crud Axios/Read"
import Create from "./Crud Axios/Create"
import Update from "./Crud Axios/Update"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/read/:id' element={<Read/>} />
    <Route path='/update/:id' element={<Update/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
