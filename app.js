const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Servidor Corriendo en puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});