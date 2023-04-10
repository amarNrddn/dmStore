import React from 'react'
import Register from '../Components/Register'
import {Routes, Route,} from 'react-router-dom'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default LoginRoutes