import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div style={{ 
            /* Gradiente DEEP TEAL SILK */
            backgroundImage: 'linear-gradient(135deg, #0B3037 0%, #134E5E 100%)',
            minHeight: '100vh', 
            color: '#f8fafc', 
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            flexDirection: 'column'
        }}>

            {/* Barra de Navegación Restaurada */}
            <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '1px' }}>
                    <span style={{ color: '#38bdf8' }}>SEC</span><span style={{ color: '#f8fafc' }}>_FIRM</span>
                </div>
                
                {/* Enlaces de navegación originales */}
                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <Link to="/" style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>Inicio</Link>
                    <Link to="/servicios" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '15px' }}>Servicios</Link>
                    <Link to="/sobre-nosotros" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '15px' }}>Sobre Nosotros</Link>
                    <Link to="/contacto" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '15px' }}>Contacto</Link>
                    <Link to="/login" style={{ 
                        padding: '8px 16px', 
                        border: '1px solid #38bdf8', 
                        color: '#38bdf8', 
                        textDecoration: 'none', 
                        borderRadius: '4px',
                        fontSize: '14px',
                        transition: 'all 0.3s'
                    }}>
                        Portal Clientes
                    </Link>
                </div>
            </nav>

            {/* Contenido Principal Restaurado */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 20px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '800px' }}
                >
                    {/* Título Original con fuente Donatto */}
                    <h1 style={{ 
                        fontFamily: 'Donatto, sans-serif', 
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
                        margin: '0 0 20px 0',
                        letterSpacing: '0.02em',
                        lineHeight: '1.1'
                    }}>
                        Portafolio de Soluciones Avanzadas
                    </h1>

                    {/* Texto Original con Editors Note */}
                    <p style={{ 
                        fontFamily: 'EditorsNote, serif', 
                        fontWeight: 600,
                        fontSize: '22px', 
                        color: '#cbd5e1',
                        margin: '0 0 40px 0',
                        letterSpacing: '0.05em',
                        lineHeight: '1.6'
                    }}>
                        Protegiendo la infraestructura crítica y los datos de su empresa mediante estrategias de ciberseguridad ofensiva y defensiva de primer nivel.
                    </p>

                    {/* Botón Original */}
                    <Link to="/servicios" style={{
                        display: 'inline-block',
                        padding: '14px 32px',
                        backgroundColor: '#38bdf8',
                        color: '#0f172a',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}>
                        Explorar Servicios
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}