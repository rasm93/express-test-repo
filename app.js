const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

app.get('/api/test', (req, res) => {
    res.json({ text: "Hello World" });
 });

app.get('/api/profil', (req, res) => {
    res.json(
        { 
            fornavn: "Andrew",
            efternavn: "Rasmussen",
            by: "Ballerup",
            alder: "24"
        }
    );
 });

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
 });