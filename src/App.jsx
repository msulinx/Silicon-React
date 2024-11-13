import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import ContactPage from '../views/ContactPage'
import '../src/assets/css/index.css'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App