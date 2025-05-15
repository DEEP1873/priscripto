import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login' 
import Doctor from './pages/Doctor'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-appoinment' element={<MyAppoinment />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/appoinment/:docId' element={<Appoinment />} />
       </Routes>  
       <Footer/>
    </div>
  )
}

export default App