var express  = require('express'),
    app = express();


//We use these route for basci testing
module.exports = function(){
    /*
    app.use('/greatings',function(req,res){
        res.send('Hello!');
    });
    app.use('/data',function(req,res){
        var data = {name:'Brahima'};
        res.data = data;

        res.json(res.data);
    });
    app.use('/',function(req,res){
        res.send('inside the server');
    }); */
    
    return app;
};    