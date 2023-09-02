const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});

app.listen(port, () => console.log('Servidor corriendo en el puerto 8080'))