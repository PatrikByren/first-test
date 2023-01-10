const express = require('express');
const app = express();
const pokemonJson = require('./pokemon.json');




app.get('/', (req, res) => {
    res.send('Hello WORLD');
});

app.get('/pokemon', (req, res, next) => {
    res.send(pokemonJson)

    /*let filteredJson = pokemon.filter(poke => 
        res.send('Hello WORLD'));*/
});
const port = 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost${port}/`)
})
