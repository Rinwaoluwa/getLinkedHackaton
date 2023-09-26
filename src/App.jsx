import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ContactPage from './pages/contactPage'
// import MobileDrawer from './pages/MobileDrawer'


function App() {

  return (
        
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='contact' element={<ContactPage />} />
        {/* <Route path='drawer' element={<MobileDrawer />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
