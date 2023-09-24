import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ContactPage from './pages/contactPage'


function App() {

  return (
        
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
