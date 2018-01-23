var studentController = function(Student) {
    var get_all  = function(req,res) {
        //Implementing generic query
        var query = {};
        for(var field in req.query) {
            if(req.query[field]){
                query[field] = req.query[field];
            }
        }
        Student.find(query, function(err,students){   // The find() takes a query as param
            if (err) {
                res.status(500).send(err);
            }else{
                var returnStudents = [];

                //FOR HYPERLINKS
                students.forEach(function(student) {
                    var singleStudent = student.toJSON();
                    singleStudent.links = {};
                    singleStudent.links.self = 'http://'+req.headers.host+'/api/v1/student/'+singleStudent._id;
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
        console.log(req.foundStudent);
        console.log(' incoming body: ',req.body);
        //update the student found my the middleware form req.body and save it
        console.log('getting into the loop;');
        for(var prop in req.foundStudent){
            if(prop in req.body ){
                req.foundStudent[prop] = req.body[prop];
            }
        }

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
        for (var field in req.foundStudent){
            if (field in req.body){
                req.foundStudent[field] = req.body[field];
            }
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
        req.foundStudent.remove(function(err){
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