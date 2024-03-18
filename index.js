const express = require('express');
const app = express();
const port = 3005;

//Carpeta pública con middleware
app.use(express.static('assets'));

//Archivo Json
const usuarios = ["Juan", "Joselyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]

//Ruta raíz o ruta de inicio
app.get('/', (req, res) => {
    res.send 
    ("<center><h1>¡Bienvenido a la página incial!! </h1></center>")
});

//Ruta de la lista json de usuarios
app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios)
});

//Middleware para validar que el usuario este en la lista json
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const user = req.params.usuario 
    const isUser = usuarios.map((u) => u.toLowerCase()).includes(user.toLowerCase()); 

    isUser ? next() : res.sendFile(__dirname + "/assets/img/who.jpeg");         
});

//Ruta para devolver la imagen incognita
app.get('/abracadabra/juego/:usuario', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

//Ruta para ejecutar una respuesta aleatoria
app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = parseInt(req.params.n)
    
    const number = Math.floor(Math.random() * (5 - 1) + 1);
    
    if (n == number) {
        res.sendFile(__dirname + '/assets/img/conejito.jpg')
    } else {
        res.sendFile(__dirname + '/assets/img/voldemort.jpg')
    }
});

//Ruta genérica
app.get('*', (req, res) => {
    res.send("<center><h1>Sorry, aquí no hay nada :/ </h1></center>");
});

//Evento escuchador para levantar el servidor
app.listen(port, () => console.log(`El servidor se ha levantado en el port http://localhost:${port}`));