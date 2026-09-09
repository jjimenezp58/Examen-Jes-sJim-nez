const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.json({
        system: 'PHANTOM-01',
        status: 'ONLINE',
        environment: 'SIMULATION',
        version: "^5.1.0"
    }); 
});
app.get('/objetivos', (req, res) => {
    res.json([
        {
            name:  'Pedro Sánchez',
            codename:  'OBJ-001',  
            status: 'MONITORED',
            risKLevel:  'HIGH'
        },
        {
            name:  'Isabel Diaz Ayuso',
            codename: 'OBJ-002',
            status:  'MONITORED',
            risKLevel:   'HIGH'
        }
    ]);
});
app.listen(PORT,  () => { 
    console.log(`Servido iniciado en el puerto ${PORT}`);
})            