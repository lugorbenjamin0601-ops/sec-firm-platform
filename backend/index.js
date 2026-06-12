const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ mensaje: 'Servidor SEC_FIRM operativo y en línea.' });
});

app.post('/api/contacto', (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    console.log('\n--- NUEVO REQUERIMIENTO INTERCEPTADO ---');
    console.log(`Empresa: ${nombre}`);
    console.log(`Contacto: ${correo}`);
    console.log(`Mensaje: ${mensaje}`);
    console.log('----------------------------------------\n');

    res.status(200).json({ 
        estatus: 'éxito',
        mensaje: 'Información recibida. El equipo de ingenieros ha sido notificado.' 
    });
});

app.listen(PORT, () => {
    console.log(`[+] Servidor backend ligero desplegado y escuchando en el puerto ${PORT}`);
});