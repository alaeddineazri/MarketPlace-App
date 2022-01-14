import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './auth/Login';
import Register from './auth/Register';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home';

function App() {
  return (
  <BrowserRouter>
    <NavbarMenu />
    <Routes >
      
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
