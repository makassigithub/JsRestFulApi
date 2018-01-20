var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Buffer = require('buffer');

var studentTemplate = {
    first_name: {
        type: String,
        required: true,
        alias:'fn'
        
    },
    last_name: {
        type: String,
        alias:'ln',
        default: 'no set yet'
        
    },
    date_of_bith: {
        type: Date,
        validate:{
            validator:function(date){
                //Ensure date is in the pass and matches student's age;
                var date_year = date.getFullYear();
                var currentYear = Date().getFullYear();
                if(date_year > currentYear){
                    return false;
                }
                return this.age = currentYear-date_year-1 || currentYear-date_year || currentYear-date_year+1;
            }
        }

    },
    age: {
        type: Number,
        min: 6,
        max: [100, 'Too old to be a student']
    },
    gender: String,
    town: String,
    country: String,
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    photo: { 
        type:String,
        data: Buffer,
        contentType: String,
        imgPath : '/path/to/some/img.png' ,//local
        match:/^http:\/\//i
    },

    level: {
        type: String,
        required: true,
    },
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}],
    result: [{type: Schema.Types.ObjectId, ref: 'Result'}],
    fees: {
        type: Number,
        min: 0,
    },
    payed: {
        type: Number,
        min:0,
        default:0
    },
    
};
var  studentSchema = new mongoose.Schema(studentTemplate);
studentSchema.virtual('full_name').get(function(){
    //Capitalize first and lat names' first letters and return them
    var  cap_fn = this.first_name.charAt(0).toUpperCase() + this.first_name.slice(1);
    var  cap_ln = this.last_name.charAt(0).toUpperCase() + this.last_name.slice(1);
    return cap_fn+' '+ cap_ln;
});

//mongoose.connect('mongodb://localhost/schoolAPI');
module.exports = mongoose.model('Student',studentSchema,'students');

//module.exports = mongoose.model('Student',studentSchema,'students');
module.exports.studentSchema = studentSchema; //will be used for unit test

