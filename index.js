const { ChatGPTAPI } = require('chatgpt');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

//coneccion con chatGPT
const gptApi = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    debug: true
})

app.post('/envio-correo-personalizado',(req, res) => {

})

app.get('/', (req,res) =>{
    res.send('!Hola');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });