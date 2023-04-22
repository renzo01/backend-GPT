const { ChatGPTAPI } = require('chatgpt');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

//coneccion con chatGPT
const gptApi = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    debug: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/chat',async (req, res) => {
    const inputMessage = req.body.inputMessage;
    try {
        const respuesta = await gptApi.sendMessage(inputMessage);
        res.status(200).send(respuesta);
    } catch (error) {
        res.status(500).send('Ocurrio un error');
    }
})

app.get('/', (req,res) =>{
    res.send('!Hola');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });