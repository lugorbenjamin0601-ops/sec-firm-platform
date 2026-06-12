import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SecureLogin from './components/SecureLogin';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/Contacto';
import Dashboard from './components/Dashboard';
import Servicios from './components/Servicios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SecureLogin />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

/* --- BLINDAJE RESPONSIVO GLOBAL --- */
* {
  box-sizing: border-box;
}

body, html, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden; /* [+] Destruye el abismo blanco lateral */
}

export default App;