import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Box } from '@mui/material';


function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('login')
    if (token) {
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  }, [])
  return (
    <>
      {
        login ?
          <Home />
          :
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '100vh',
              alignItems: 'center'
            }}
          >
            <Routes>
              <Route path='*' element={<Navigate to={'/login'} />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Box>
      }

    </>
  )
}

export default App
