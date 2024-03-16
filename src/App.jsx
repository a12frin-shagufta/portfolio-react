
import './App.css'
import { Route,Routes,Router} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

import About  from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

     import React from 'react'

     
     const App = () => {
       return (
         
          
            <div className='App'>
          <Navbar/>
          
          <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          
          </div>
        
         
       )
     }
     
     export default App