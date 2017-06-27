// express is a web application framework for Node.js
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Vehicle = require('./app/models/vehicle');

// configure app for bodyParser()
// lets us grab data from the body of POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set up port for server to listen on
// you can set enviroment variables
const port = process.env.PORT || 3000

// connect to db
mongoose.connect('mongodb://localhost:27017');

// api routes
const router = express.Router();

// MIDDLEWARE //////////////////////////////////////////////////////////////////
router.use(function(req, res, next){
  console.log('hit middleware');
  next();
});
////////////////////////////////////////////////////////////////////////////////

// routes will be prefixed with /api
app.use('/api', router);

// test route
router.get('/', function(req, res){
  res.json({message: 'Welcome to our API!'});
});

router.route('/vehicles')
  .post(function(req, res){
    let vehicle = new Vehicle();
    vehicle.make = req.body.make;
    vehicle.model = req.body.model;
    vehicle.color = req.body.color;

    vehicle.save(function(err){
      if(err) {
        res.send(err);
      }
      res.json({message:'New Vehicle Added'});
    })
  })

  .get(function(req,res){
    Vehicle.find(function(err, vehicles){
      if(err) {
        res.send(err);
      }
      res.json(vehicles);
    });
  });

router.route('/vehicle/:vehicle_id')
  .get(function(req, res) {
    Vehicle.findById(req.params.vehicle_id, function(err, vehicle){
      if (err) {
        res.send(err);
      }
      res.json(vehicle);
    });
  });

router.route('/vehicle/make/:make')
  .get(function(req, res) {
    Vehicle.find({make: req.params.make}, function(err, vehicle){
      if (err) {
        res.send(err);
      }
      res.json(vehicle);
    });
  });

router.route('/vehicle/color/:color')
  .get(function(req, res){
    Vehicle.find({color: req.params.color}, function(err, vehicle){
      if(err) {
        res.send(err);
      }
      res.json(vehicle);
    });
  });

// fire up server
app.listen(port, function(){
  console.log('application listening on port ' + port)
});
