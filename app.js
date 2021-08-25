const express = require('express');
const app = express();
const port = 3001;
const Chance = require('chance');
const axios = require('axios');
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const chance = new Chance();

app.get('/', (req, res) => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
        const { id, advice } = response.data.slip;
        res.send({ id, tweet: advice, author: chance.name() });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.post('/loginUser', (req, res) => {
    if (req.body.username === 'nate' && req.body.password === 'nate') {
        res.send('true');
    } else {
        res.send('false');
    }
});
