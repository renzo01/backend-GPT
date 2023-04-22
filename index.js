const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req,res) =>{
    res.send('!Hola');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });