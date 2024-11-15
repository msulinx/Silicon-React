import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import ContactPage from '../views/ContactPage'
import '../src/assets/css/index.css'
import { ContextProvider} from './components/ContextComponent'

function App() {

  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<ContactPage />}/>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App