import { HashRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactpage from './pages/ContactPage'
import Registerpage from './pages/RegisterPage'


function App() {

  return (
        
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='contact' element={<Contactpage />} />
        <Route path='register' element={<Registerpage />} />
      </Routes>
    </HashRouter> 
  )
}

export default App
