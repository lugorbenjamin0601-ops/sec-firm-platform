import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Herramienta de transmisión real

export default function Contacto() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        setCargando(true); 

        const parametros = {
            name: nombre,
            correo: correo,
            message: mensaje,
        };

        emailjs.send(
            'service_1929mnd',
            'template_xbf3h78',
            parametros, 
            'an7E8qof7kM-7amcl'
        )
        .then((respuesta) => {
            console.log('[+] Transmisión exitosa:', respuesta.status, respuesta.text);
            setCargando(false);
            setEnviado(true); 
            setNombre('');   
            setCorreo('');
            setMensaje('');

            setTimeout(() => {
                setEnviado(false);
            }, 5000);
        })
        .catch((error) => {
            console.error('[-] Error en la transmisión:', error);
            setCargando(false);
            alert('Fallo en la comunicación con el servidor. Intente de nuevo.');
        });
    };

    return (
        <div style={{ 
            backgroundImage: 'linear-gradient(to bottom, #0A0A0A 0%, #1a1a2e 100%)', 
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            flexDirection: 'column'
        }}>
            
            <nav style={{ padding: '20px 40px', backgroundColor: 'rgba(10, 10, 10, 0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>← Volver al Inicio</Link>
            </nav>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }}
                    style={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.6)', 
                        padding: '40px', 
                        borderRadius: '8px', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        width: '100%', 
                        maxWidth: '500px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                    }}
                >
                    <h2 style={{ fontFamily: 'Donatto, sans-serif', color: '#38bdf8', marginTop: 0, letterSpacing: '0.04em', fontSize: '28px', textAlign: 'center' }}>
                        INICIAR EVALUACIÓN
                    </h2>
                    <p style={{ fontFamily: 'EditorsNote, serif', color: '#cbd5e1', textAlign: 'center', marginBottom: '30px' }}>
                        Establezca contacto seguro con nuestros ingenieros.
                    </p>

                    <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input 
                            type="text" 
                            placeholder="Nombre de la Empresa o Entidad" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '12px', borderRadius: '4px', outline: 'none' }}
                        />
                        <input 
                            type="email" 
                            placeholder="Correo Electrónico Oficial" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '12px', borderRadius: '4px', outline: 'none' }}
                        />
                        <textarea 
                            placeholder="Describa el vector de ataque o requerimiento de auditoría..." 
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                            rows="4"
                            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '12px', borderRadius: '4px', outline: 'none', resize: 'none' }}
                        />

                        <motion.button 
                            whileHover={{ scale: cargando ? 1 : 1.02 }}
                            whileTap={{ scale: cargando ? 1 : 0.98 }}
                            type="submit"
                            disabled={cargando}
                            style={{ 
                                backgroundColor: cargando ? '#475569' : '#38bdf8', 
                                color: cargando ? '#cbd5e1' : '#0A0A0A', 
                                padding: '14px', 
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: cargando ? 'not-allowed' : 'pointer', 
                                fontWeight: 'bold',
                                letterSpacing: '1px'
                            }}
                        >
                            {cargando ? 'ENCRIPTANDO Y ENVIANDO...' : 'TRANSMITIR MENSAJE'}
                        </motion.button>
                    </form>

                    {enviado && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', borderRadius: '4px', textAlign: 'center', fontSize: '14px' }}
                        >
                            <strong>[+] TRANSMISIÓN SEGURA:</strong> Requerimiento recibido. El equipo analizará su solicitud.
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}