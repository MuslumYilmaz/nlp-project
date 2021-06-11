var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();
const api_key = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(bodyParser.json());

app.use(express.static('dist'));

console.log(__dirname);
console.log(api_key);

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.post('/userInput', async (req, res) => {
    const article = req.body.formText;
    console.log(article);
    const articleResults = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${article}&lang=en`, { method: 'POST' });
    try {
        const data = await articleResults.json();
        console.log(data)
        res.send(data);
    } catch (error) {
        console.log("error",error)
    }
});