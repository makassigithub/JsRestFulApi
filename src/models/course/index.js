
var mongoose = require('mongoose');

var courseTemplate = {
    name: {
        type: String,
        required: true,     
    },
    code: {
        type: String,
        required: true,     
    },
    session: Number,
    credit: Number,
};
var courseSchema = new mongoose.Schema(courseTemplate);
mongoose.connect('mongodb://localhost/schoolAPI');
module.exports = mongoose.model('Course',courseSchema,'courses');
module.exports.courseSchema = courseSchema; //will be used for unit test

