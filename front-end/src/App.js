import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'


// Imoport Components
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'
import Message from './components/layouts/Message'



// Import Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastros/Cadastro'
import Proventos from './components/pages/Cadastros/Proventos'
import Carteira from './components/pages/Cadastros/Carteira'
import Remove from './components/pages/Cadastros/Remove'
import Analise from './components/pages/Cadastros/Analise'


// Context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <Router>
      <Message />
      <UserProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/Analise' element={<Analise />}/>
          <Route path='/:id' element={<Remove />}/>
          <Route path='/Cadastro' element={<Cadastro />}/>
          <Route path='/Proventos' element={<Proventos />}/>
          <Route path='/Carteira' element={<Carteira />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/remove/:id' element={<Remove />}/>
        </Routes>
      </Container>
      <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
