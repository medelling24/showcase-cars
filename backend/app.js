//Main File

//config file
var config = require('./config.json'); 

//Dependencies 
var express = require('express');


//Controllers
var CarController = require('./controllers/cars');


//Init variables
var app = express(); 
var router = express.Router();


// Configuration
var port = config.port;
app.use(function (req, res, next) {

    // Websites to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length');

    // Set to true if you need the website to include cookies in the requests sent to the API 
    res.setHeader('Access-Control-Allow-Credentials', false);

    next();
});


//Router

router.get('/cars', CarController.getCars);
router.get('/car', CarController.getCar);
router.get('/cars/compare', CarController.compare);


// Register router
app.use('/api', router);

// Init server
app.listen(port);
console.log('The force is strong in ' + port);
