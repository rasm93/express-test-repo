const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));

require('./routes.js')(app);

app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
 });