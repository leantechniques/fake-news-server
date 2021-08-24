const express = require('express')
const app = express()
const port = 3000
const Chance = require("chance");
const axios = require("axios");

const chance = new Chance();

app.get('/', (req, res) => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
        const {id, advice} = response.data.slip;
        res.send({id, tweet: advice, author: chance.name()});
    })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})