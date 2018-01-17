
var data = [
    {
        name: 'Math',
        code:'MAT0000',
        credit: 3,
    },
    {
        name: 'Algorithm',
        code:'ALG0021',
        credit: 2,
    },
    {
        name: 'Philosophy',
        code:'PHI2910',
        credit: 1,
    },
    
    
];

var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/schoolAPI';
mongodb.connect(url, function (err, database) {
    if(err){
        console.log(err);
        return;
    }
    var courseDB = database.db('schoolAPI');
    var Courses = courseDB.collection('courses');
    Courses.insert(data);
    console.log('done');
    database.close();
});