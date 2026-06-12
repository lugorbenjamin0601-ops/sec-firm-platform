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

export default App;