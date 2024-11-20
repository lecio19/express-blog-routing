//creare delle rotte che rispettino l'architettura REST
//registrare tali rotte nel file app.js
//verificare il funzionamento delle rotte tramite Postman
//creare un file di routing,usando l'array, che conterrà le rotte necessarie per l'entità POST
//creare all'interno le rotte per le operazioni CRUD
//verificare che le risposte confermino l'operazione che il server deve eseguire secondo il metodo REST

console.log('test')

const express = require('express');
const app = express();
const port = 3000;
const posts = require('./posts.js')

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("SERVER DEL MIO BLOG")
})

app.get('/posts', (req, res) => {

    res.json(posts)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})