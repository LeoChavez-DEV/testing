import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePage from './Pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className='App'>
        <BrowserRouter>

          <Routes>

          <Route path='/home' element={<HomePage/>} />
              
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
