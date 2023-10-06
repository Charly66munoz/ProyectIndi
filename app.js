const express= require('express');
const path = require('path');
const app= express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',(req,res) =>{
    res.send("Base-1");
});

app.get('/mostrat_sitio', (req,res) =>{
    res.sendFile((__dirname+'/views/home.html'))
});

app.listen(3030, function() {
    console.log("Servidor corriendo");
});

