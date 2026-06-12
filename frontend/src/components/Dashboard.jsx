import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function Dashboard() {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const desuscribir = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user);
                setCargando(false);
            } else {
                navigate('/login');
            }
        });

        return () => desuscribir();
    }, [navigate]);

    const cerrarSesion = async () => {
        await signOut(auth);
        navigate('/');
    };

    if (cargando) {
        return (
            <div style={{ 
                /* Gradiente EMERALD DEPTH de arriba hacia abajo */
                backgroundImage: 'linear-gradient(to bottom, #0F2027 0%, #28623A 100%)', 
                minHeight: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                color: '#10b981', 
                fontFamily: 'Donatto, sans-serif', 
                letterSpacing: '0.04em' 
            }}>
                <h2>DESENCRIPTANDO BÓVEDA...</h2>
            </div>
        );
    }

    return (
        <div style={{ 
            /* Gradiente EMERALD DEPTH de arriba hacia abajo */
            backgroundImage: 'linear-gradient(to bottom, #0F2027 0%, #28623A 100%)', 
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: 'Inter, sans-serif'  
        }}>

            {/* Barra de Navegación con Glassmorphism oscuro */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'rgba(15, 32, 39, 0.8)', borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '1px' }}>
                    {/* Acento verde esmeralda en el logo */}
                    <span style={{ color: '#10b981' }}>SEC</span>_FIRM <span style={{ fontSize: '12px', color: '#10b981', marginLeft: '10px' }}>■ CONEXIÓN SEGURA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ color: '#cbd5e1', fontSize: '14px' }}>{usuario.email}</span>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={cerrarSesion}
                        style={{ backgroundColor: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                    >
                        Destruir Sesión
                    </motion.button>
                </div>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}
            >
                <h1 style={{ fontFamily: 'Donatto, sans-serif', fontWeight: 'normal', fontSize: '32px', marginBottom: '10px', letterSpacing: '0.04em' }}>
                    PANEL DE CONTROL DE SEGURIDAD
                </h1>
                <p style={{ fontFamily: 'EditorsNote, serif', fontWeight: 600, color: '#cbd5e1', fontSize: '18px', marginBottom: '40px', letterSpacing: '0.02em' }}>
                    Bienvenido a su entorno aislado. Aquí se mostrarán las métricas de su infraestructura.
                </p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Cajas con fondo cristalizado que deja ver el Emerald Depth */}
                    <div style={{ flex: 1 , backgroundColor: 'rgba(15, 32, 39, 0.6)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                        <h3 style={{ fontFamily: 'Donatto, sans-serif', fontWeight: 'normal', color: '#10b981', marginTop: 0, letterSpacing: '0.04em' }}>ESTADO DE LA RED</h3>
                        <p style={{ color: '#10b981',fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>Estable</p>
                        <p style={{ fontFamily: 'EditorsNote, serif', fontWeight: 600, color: '#cbd5e1', fontSize: '16px', margin: 0 }}>0 intrusiones detectadas en las últimas 24 hrs.</p>
                    </div>
                    <div style={{ flex: 1, backgroundColor: 'rgba(15, 32, 39, 0.6)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
                        <h3 style={{ fontFamily: 'Donatto, sans-serif', fontWeight: 'normal', color: '#10b981', marginTop: 0, letterSpacing: '0.04em' }}>ÚLTIMA AUDITORÍA</h3>
                        <p style={{ color: '#f8fafc',fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>Hace 3 días</p>
                        <p style={{ fontFamily: 'EditorsNote, serif', fontWeight: 600, color: '#cbd5e1', fontSize: '16px', margin: 0 }}>Vulnerabilidades críticas: Ninguna.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}