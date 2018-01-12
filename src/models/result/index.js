var mongoose = require('mongoose');
var getGrade = require('./grades');

var resultTemplate = {
    mark: {
        type: Number,
        required: true, 
        min:0,
        max:100     
    },
    grade: {
        type: String,
        required: true,
        set: function()  {
            return getGrade(this.mark);
        }   
    },
    average: Number,
    best: Number
};
var resultSchema = new mongoose.Schema(resultTemplate);
mongoose.connect('mongodb://localhost/schoolAPI');

module.exports = mongoose.model('Results',resultSchema,'results');
module.exports.resultSchema = resultSchema; //will be used for unit test

