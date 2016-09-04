"use strict";

//dependences
var jsonfile = require('jsonfile')
var _ = require('underscore');


//Read json file and save in a variable
var file = './models/cars.json';
var cars = jsonfile.readFileSync(file);



//GET 
//api/cars
//Returns: All the cars
exports.getCars = function(req, res) {

  if(cars){
  	res.send({error: false, data: cars});
  }
  else{
  	res.status(500).send({error: true});	
  }
};

//GET 
//api/car?id={id}
//Returns: car with specific id 
exports.getCar = function(req, res) {

	if(cars){

		var id = parseInt(req.query.id); //get parameter
		var found = _.where(cars.cars, {"id": id}); //search in the json the element with the specific id
		res.send({error: false, data: found});
	}
	else{
		res.status(500).send({error: true});	
	}
};


//GET 
//api/cars/compare?id1={id}&id2={id}&id3={id} 
//id3 is optional
//Returns: Cars to compare 
exports.compare = function(req, res) {

	if(cars){
		//get parameters
		var model1 = parseInt(req.query.id1);
		var model2 = parseInt(req.query.id2);
		var model3 = parseInt(req.query.id3);

		//search in the json the element with the specific id
		var found1 = _.where(cars.cars, {"id": model1});
		var found2 = _.where(cars.cars, {"id": model2});

		var found3= "";
		if(!isNaN(model3)) //if the optional parameter is there, search it
			found3 = _.where(cars.cars, {"id": model3});

		var data = {
			 found1, 
			 found2,
			 found3
		}

		res.send({error: false, data: data});
  	}
  	else{
		res.status(500).send({error: true});	
	}
};

