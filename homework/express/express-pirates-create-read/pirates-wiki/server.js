const express = require('express');
const hbs = require('hbs');
const app = express();
const bodyParser = require('body-parser');
const pirateController = require('./controllers/pirates.js');

app.use("/pirates", pirateController);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("express is listening on port ", port);
})