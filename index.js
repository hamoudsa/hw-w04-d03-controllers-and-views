var express = require('express');
var mustache = require('mustache-express');
var packageData = require('./modules/angry_birds');
var app = express();
var port = 3000;
var birdControllers = require('./controllers/birds_controllers');
app.set('view engine', 'html');
app.engine('html', mustache());

app.set('views', __dirname + '/views');



app.get('/', function(request, response){
  response.render('./index', packageData);

})

app.get('/:id', function(request,response){
    var index = request.params.id;
    console.log(packageData.packages[index].name);
    var birdsVariable = {
        pid: packageData.birds[index].id,
        pname : packageData.birds[index].name,
        pabilities: packageData.birds[index].abilities,
        pimage: packageData.birds[index].image,
        pgroup: packageData.birds[index].group, 
        pspecies: packageData.birds[index].species, 
        pfeels: packageData.birds[index].feels, 
    }
    response.render('./show',birdsVariable);
})
app.get('/', function(request,response){
    response.send(' angery birds homepage')
})

app.use('/angry_birds', birdController);

// Make your app listen
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
})