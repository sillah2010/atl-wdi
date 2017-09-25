/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParcer = require('body-parser');
const methodOverride = require('method-override');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
const todosController = require("./controllers/todos");

// log
app.use(methodOverride('_method'));

app.use( logger('dev'));

app.use(bodyParcer.urlencoded({extended: true}));
/*Views*/
app.set('view engine', 'hbs');

//Controllers
app.use("/todos", todosController);

//Home
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
