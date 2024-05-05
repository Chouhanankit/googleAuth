import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import NotFound from './screens/NotFound'
import { useDispatch } from 'react-redux'
import { fetchUser } from './feature/google/googleSlice'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App