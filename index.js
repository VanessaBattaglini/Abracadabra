const express = require('express');
const app = express();
const port = 3000;

//Carpeta pública con middleware
app.use(express.static('assets'));

//Archivo Json
const usuarios = ["Juan", "Joselyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]

//Ruta raíz o ruta de inicio
app.get('/', (req, res) => {
    res.send 
    ("<center><h1>¡Bienvenido a la página incial!! </h1></center>")
});

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios)
});

// app.get('/abracadabra/juego/:usuario', (req, res) => {
//    const n = Math.floor(Math.random() * (4 - 1)) + 1;
// const usuario = req.params.usuario;

// usuario == n
// ? res.redirect('./assets/img/conejito.jpg')
// : res.redirect('./assets/img/voldemort.jpg');

// });

app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = parseInt(req.params.n)
    
    const number = Math.floor(Math.random() * (5 - 1) + 1);
    
    if (n == number) {
        console.log(n)
        console.log(number)
        res.sendFile(__dirname + '/assets/img/conejito.jpg')
    } else {
        console.log(n)
        console.log(number)
        res.sendFile(__dirname, + '/assets/img/voldemort.jpg')
    }
});
app.get('abracadabra/juego/:usuario', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
//Ruta genérica
// app.get("*", (req, res) => {
//     res.send("<center><h1>Sorry, aquí no hay nada :/ </h1></center>");
// });

app.listen(port, () => console.log(`El servidor se ha levantado en el port http://localhost:${port}`));