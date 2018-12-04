var express = require('express');
var router = express.Router();
var birds = require('../modules/angry_birds');

// index route that shows all of the customers
router.get('/', function(request, response) {
  var birdsVariables = {
    birdsList: customers
  }
  response.render('./views/index', birdsVariables);
})

// show route that shows a single customer

router.get('/:bird', function(request, response) {
  // still needs to be set up
})

module.exports = router;