const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render("index", {
        phrase: "Welcome to Pizza Express!"
    });
})

app.get('/topping/:type', (req, res) => {
    res.render("toppings", {
        phrase: `${req.params.type} pizza! Good choice.`
    });
})

app.get('/order/:amount/:size', (req, res) => {
    res.render("order", {
        phrase: `Your order for ${req.params.amount}  ${req.params.size} pizzas will be ready in 1 minute!!`
    })
})

app.get('*', (req, res) => {
    res.send("404 Page Not Found", 404);
});
  


app.listen(port, function () {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});