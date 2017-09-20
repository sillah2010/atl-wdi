const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Pizza Express!");
})

app.get('/topping/:type', (req, res) => {
    res.send(`${req.params.type} pizza! Good choice.`);
})

app.get('/order/:amount/:size', (req, res) => {
    res.send(`Your order for ${req.params.amount}  ${req.params.size} pizzas will be ready in 1 minute!!`);
})


app.listen(port, function () {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});