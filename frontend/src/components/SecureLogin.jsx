import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function SecureLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState('');
  const navigate = useNavigate();

  const manejarAcceso = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    try {
      const credenciales = await signInWithEmailAndPassword(auth, email, password);
      console.log("Acceso concedido al usuario", credenciales.user.email);

      navigate('/dashboard');
    } catch (errorFirebase) {
      console.error(errorFirebase.code);
      setError('Credenciales inválidas o acceso denegado por el motor de seguridad.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ 
        /* Gradiente CRIMSON VELVET: Atmósfera de Zona Restringida */
        backgroundImage: 'linear-gradient(135deg, #2C0F12 0%, #6B1E23 100%)', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        color: '#f8fafc', 
        fontFamily: 'Inter, sans-serif' 
    }}>

      {/* Navegación de Escape con Glassmorphism ajustado al tono oscuro */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'rgba(44, 15, 18, 0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '14px', transition: 'color 0.3s' }}>← Abortar y Volver al inicio</Link>
      </nav>

      {/* Formulario de Acceso */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <motion.form
          onSubmit={manejarAcceso}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
              backgroundColor: 'rgba(20, 10, 12, 0.6)', 
              padding: '40px', 
              borderRadius: '8px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              width: '100%', 
              maxWidth: '400px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
              backdropFilter: 'blur(12px)'
          }}
          >
            {/* Título en Donatto */}
            <h2 style={{ 
                fontFamily: 'Donatto, sans-serif', 
                fontWeight: 'normal', 
                color: '#f8fafc', /* Blanco brillante para destacar sobre el rojo */
                marginTop: 0, 
                textAlign: 'center', 
                letterSpacing: '0.04em',
                fontSize: '28px'
            }}>
                PORTAL CLIENTES
            </h2>
            
            {/* Subtítulo en Editors Note */}
            <p style={{ 
                fontFamily: 'EditorsNote, serif', 
                fontWeight: 600, 
                color: '#cbd5e1', 
                fontSize: '16px', 
                textAlign: 'center', 
                marginBottom: '30px',
                letterSpacing: '0.05em'
            }}>
                Autenticación requerida para acceder a la bóveda.
            </p>

            {/* Mensaje de Error Dinámico */}
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '1px solid #f87171', color: '#fca5a5', padding: '12px', borderRadius: '4px', marginBottom: '20px', fontSize: '14px', textAlign: 'center', backdropFilter: 'blur(5px)' }}>
                {error}
              </motion.div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="email"
                placeholder="Correo electrónico asignado"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255,255,255,0.2)', color: '#f8fafc', padding: '12px', borderRadius: '4px', outline: 'none' }}
                required
                />
                <input
                  type="password"
                  placeholder="Clave criptográfica"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255,255,255,0.2)', color: '#f8fafc', padding: '12px', borderRadius: '4px', outline: 'none' }}
                  required
                />
                <motion.button
                  whileHover={{ scale: cargando ? 1 : 1.02, backgroundColor: cargando ? '#94a3b8' : '#e0f2fe' }}
                  whileTap={{ scale: cargando ? 1 : 0.98 }}
                  type="submit"
                  disabled={cargando}
                  style={{ 
                      backgroundColor: cargando ? 'rgba(255,255,255,0.2)' : '#f8fafc', 
                      color: cargando ? '#cbd5e1' : '#2C0F12', /* Texto oscuro (rojo carmesí) sobre botón blanco */
                      padding: '12px', 
                      border: 'none', 
                      borderRadius: '4px', 
                      cursor: cargando ? 'not-allowed' : 'pointer', 
                      fontWeight: 'bold', 
                      fontSize: '16px', 
                      marginTop: '10px',
                      letterSpacing: '0.05em'
                  }}
                >
                  {cargando ? 'VERIFICANDO HASH...' : 'DESENCRIPTAR ACCESO'}
                </motion.button>
            </div>
          </motion.form>
      </div>
    </div>
  );
}