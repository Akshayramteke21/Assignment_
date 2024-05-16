import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import StudentLogin from './components/StudentLogin'
import StudentRegister from './components/StudentRegister'
import Navabar from './components/Navabar'
import MyProfile from './components/MyProfile'
import MyPerformance from './components/MyPerformance'



function App() {
  const [count, setCount] = useState(0)

  return (

    <>

     
    <BrowserRouter>
    <Navabar/>
      <Routes>
        
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/studentreg' element={<StudentRegister/>}></Route>
        <Route path='/studprofile' element={<MyProfile/>}></Route>
        <Route path='/studperformance' element={<MyPerformance/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
