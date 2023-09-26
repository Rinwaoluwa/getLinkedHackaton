import { HashRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ContactPage from './pages/contactPage'



function App() {

  return (
        
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
