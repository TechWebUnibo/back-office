const mongoose = require('mongoose');

mongoose.connect("mongodb://*IP*/*database*");


//azione da fare una volta quando la connessione viene fatta
mongoose.connection.once('open', function(){
console.log('Connection up')
//
}).on('error', function(error){
    console.log('Connection error', error);
});