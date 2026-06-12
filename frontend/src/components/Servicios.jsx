import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Servicios() {
    const catalogoServicios = [
        {
            titulo: "RED TEAMING",
            subtitulo: "Seguridad Ofensiva",
            desc: "Simulaciones de ataques reales. Evaluamos la resistencia de su infraestructura explotando vulnerabilidades antes de que lo haga un actor malicioso."
        },
        {
            titulo: "BLUE TEAMING",
            subtitulo: "Ingeniería Defensiva",
            desc: "Construcción de escudos resilientes. Monitoreo avanzado, caza de amenazas y respuesta a incidentes para neutralizar ataques en tiempo real."
        },
        {
            titulo: "AUDITORÍA ZERO TRUST",
            subtitulo: "Análisis Criptográfico",
            desc: "Revisión exhaustiva de arquitecturas de red bajo la filosofía de Cero Confianza. Validación de protocolos y estándares de encriptación."
        }
    ];

    return (
        <div style={{ 
            /* Gradiente OBSIDIAN PLUM: Claro arriba (#4E2A4F) hacia Oscuro abajo (#2D1E2F) */
            backgroundImage: 'linear-gradient(to bottom, #4E2A4F 0%, #2D1E2F 100%)', 
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: 'Inter, sans-serif' 
        }}>
            
            {/* Barra de Navegación con Glassmorphism */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'rgba(45, 30, 47, 0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', letterSpacing: '1px' }}>
                    <span style={{ color: '#38bdf8' }}>SEC</span><span style={{ color: '#f8fafc' }}>_FIRM</span>
                </Link>
                <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>← Volver al Inicio</Link>
            </nav>

            <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                
                {/* Cabecera de la sección */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 style={{ 
                        fontFamily: 'Donatto, sans-serif', 
                        fontWeight: 'normal', 
                        fontSize: '38px', 
                        marginBottom: '15px', 
                        letterSpacing: '0.04em' 
                    }}>
                        PORTAFOLIO DE SERVICIOS
                    </h1>
                    <p style={{ 
                        fontFamily: 'EditorsNote, serif', 
                        fontWeight: 600, 
                        color: '#cbd5e1', 
                        fontSize: '20px', 
                        marginBottom: '60px', 
                        letterSpacing: '0.05em', 
                        maxWidth: '800px', 
                        margin: '0 auto 60px auto',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        Nuestras capacidades operativas están diseñadas para neutralizar amenazas modernas mediante tácticas quirúrgicas de ciberseguridad.
                    </p>
                </motion.div>

                {/* Grid de Tarjetas de Servicios */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    {catalogoServicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            /* Retraso progresivo para que aparezcan una por una */
                            transition={{ duration: 0.6, delay: index * 0.2 }} 
                            whileHover={{ y: -10 }} /* Efecto de elevación al pasar el mouse */
                            style={{
                                backgroundColor: 'rgba(20, 10, 20, 0.5)', /* Fondo oscuro que contrasta con el Plum */
                                padding: '40px 30px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                width: '100%',
                                maxWidth: '340px',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                        >
                            <h3 style={{ fontFamily: 'Donatto, sans-serif', fontWeight: 'normal', fontSize: '20px', color: '#38bdf8', marginTop: 0, marginBottom: '5px', letterSpacing: '0.04em' }}>
                                {servicio.titulo}
                            </h3>
                            <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                {servicio.subtitulo}
                            </div>
                            <p style={{ fontFamily: 'EditorsNote, serif', fontWeight: 600, color: '#e2e8f0', fontSize: '16px', lineHeight: '1.7', margin: 0, letterSpacing: '0.03em' }}>
                                {servicio.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Final */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.8, duration: 0.6 }} 
                    style={{ marginTop: '70px' }}
                >
                    <Link to="/contacto" style={{ 
                        padding: '14px 32px', 
                        backgroundColor: '#38bdf8', 
                        color: '#0A0A0A', 
                        textDecoration: 'none', 
                        borderRadius: '4px', 
                        fontWeight: 'bold', 
                        fontSize: '16px', 
                        letterSpacing: '0.05em', 
                        display: 'inline-block' 
                    }}>
                        SOLICITAR AUDITORÍA
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}