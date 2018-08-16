const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'el sergio o'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        src: '/assets/img/teemo-1.jpg'
    });
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});