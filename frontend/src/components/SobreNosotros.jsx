import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SobreNosotros() {
    return (
        <div style={{ 
            /* Gradiente NAVY MIRAGE */
            backgroundImage: 'linear-gradient(135deg, #141E30 0%, #35577D 100%)',
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: 'Inter, sans-serif' 
        }}>

            {/* Barra de Navegación con Glassmorphism */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'rgba(20, 30, 48, 0.7)', borderBottom: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '20px', letterSpacing: '1px' }}>
                    <span style={{ color: '#38bdf8' }}>SEC</span><span style={{ color: '#f8fafc' }}>_FIRM</span>
                </Link>
                <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>← Volver al Inicio</Link>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
            >
                <h1 style={{ 
                    fontFamily: 'Donatto, sans-serif', 
                    fontWeight: 'normal', 
                    fontStyle: 'normal', 
                    fontSize: '32px', 
                    marginBottom: '25px',
                    letterSpacing: '0.04em' 
                }}>
                    FILOSOFÍA DE SEGURIDAD
                </h1>
                
                <p style={{ 
                    fontFamily: 'EditorsNote, serif', 
                    fontWeight: 600,
                    textShadow: '0.3px 0.3px 0px #94a3b8', 
                    color: '#e2e8f0', 
                    fontSize: '20px', 
                    lineHeight: '1.8', 
                    marginBottom: '30px', 
                    textAlign: 'justify',
                    letterSpacing: '0.05em' 
                }}>
                    En <span style={{ 
                        fontWeight: 900, 
                        color: '#ffffff', 
                        textShadow: '0.8px 0.8px 0px #ffffff', 
                        letterSpacing: '0.08em' 
                    }}>SEC_FIRM</span>, entendemos que la ciberseguridad no es un producto, sino un proceso continuo.
                    Nacimos con la mision de proteger la infraestructura crítica de nuestros clientes bajo el paradigma de <em style={{ letterSpacing: '0.08em' }}>Zero Trust</em> (Cero Confianza).
                    No asumimos que los sistemas son seguros; lo comprobamos constantemente mediante tácticas de seguridad ofensiva (Red Teaming)
                    y construimos escudos resilientes con ingeniería defensiva (Blue Teaming).
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                    {/* Tarjeta con fondo semitransparente */}
                    <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', width: '45%', backdropFilter: 'blur(10px)' }}>
                        <h3 style={{ 
                            fontFamily: 'Donatto, sans-serif', 
                            fontWeight: 'normal', 
                            fontStyle: 'normal',
                            fontSize: '15px',
                            color: '#38bdf8', 
                            marginTop: 0,
                            letterSpacing: '0.04em'
                        }}>
                            PRECISIÓN
                        </h3>
                        <p style={{ 
                            fontFamily: 'EditorsNote, serif', 
                            fontWeight: 600,
                            textShadow: '0.2px 0.2px 0px #94a3b8',
                            color: '#cbd5e1', 
                            fontSize: '16px', 
                            margin: 0,
                            letterSpacing: '0.05em' 
                        }}>
                            Análisis quirúrgico de cada vector de ataque potencial.
                        </p>
                    </div>
                    {/* Tarjeta con fondo semitransparente */}
                    <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', width: '45%', backdropFilter: 'blur(10px)' }}>
                        <h3 style={{ 
                            fontFamily: 'Donatto, sans-serif', 
                            fontWeight: 'normal', 
                            fontStyle: 'normal', 
                            fontSize: '15px',
                            color: '#38bdf8', 
                            marginTop: 0,
                            letterSpacing: '0.04em'
                        }}>
                            CONFIDENCIALIDAD
                        </h3>
                        <p style={{ 
                            fontFamily: 'EditorsNote, serif', 
                            fontWeight: 600,
                            textShadow: '0.2px 0.2px 0px #94a3b8',
                            color: '#cbd5e1', 
                            fontSize: '16px', 
                            margin: 0,
                            letterSpacing: '0.05em' 
                        }}>
                            Manejo de información bajo los estándares criptográficos más estrictos.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}