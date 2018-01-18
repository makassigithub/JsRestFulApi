var studentController = function(Student) {

    var get_all  = function(req,res) {
        Student.find(function(err,students){   // The find() takes a query as param
            if (err) {
                res.status(500).send(err);
            }else{
                var returnStudents = [];

                //FOR HYPERLINKS
                students.forEach(function(student) {
                    var singleStudent = student.toJSON();
                    singleStudent.links = {};
                    singleStudent.links.self = 'http://'+req.headers.host+'/api/students/'+singleStudent._id;
                    returnStudents.push(singleStudent);
                });
                console.log('length:',returnStudents.length);
                res.json(returnStudents);
            }
        });
    };
    var post = function(req,res){
        var student = new Student(req.body); 
        student.save(function(err){
            if (err)
            {
                res.status(500).send(err);  
            }                            
            res.status(201).json(student);  
        });             
    };
    /****************************************************************************************************************
    ROUTES AFFECTED BY THE MIDDLEWARE THAT PRECOMPUTES THE STUDENT BY ID FROM THE DATABASE AND PUSH THE REQUEST AHEAD
    *****************************************************************************************************************/
    var getOne = function(req,res) {
        res.json(req.foundStudent);
    };
    var update = function(req,res){
        //update the student found my the middleware form req.body and save it
        var foundStudent = req.foundStudent;
        for(var prop in foundStudent){
            req.foundStudent[prop] = req.body[prop];
        }
        /*req.foundStudent.title = req.body.title;
        req.foundStudent.author = req.body.author;
        req.foundStudent.genre = req.body.genre;
        req.foundStudent.isRead = req.body.isRead;*/
        req.foundStudent.save(function(err){
            if (err)
            {
                res.status(500).send(err);
            }
            res.json(req.foundStudent);
        });
    };
    var patch = function(req,res){
        // we don't want to update the id in case it's mistakenly updated
        if(req.foundStudent._id)
        {
            delete req.body._id;
        }
        // We update each field in foundStudent if provided in req.body
        for (var field in req.body){
            req.foundStudent[field] = req.body[field];
        }
        // pacth the student now
        req.foundStudent.save(function(err){
            if (err)
            {
                res.status(500).send(err);
            }
            res.json(req.foundStudent);
        });
    };
    var remove = function(req,res){
        req.foundBook.remove(function(err){
            if (err)
            {
                res.status(500).send(err); 
            }
            res.status(204).send('Removed!');
        });
    };
    
    return {
        findAllStudents: get_all,
        addStudent:post,
        findStudent:getOne,
        updateStudent: update,
        patchStudent:patch,
        deleteStudent:remove,
    };
    
};

module.exports = studentController;