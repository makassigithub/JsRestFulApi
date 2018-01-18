module.exports = function(StudentModel) {  
    return  function(req,res,next){
        StudentModel.findById(req.params.studentId,function(err,student){  
            if (err) {
                res.status(500).send(err);
            } else if (student){
                //if the the student exists, we add it to the request as a property
                req.foundStudent = student;
                //We call next() to send push the request the next middleware(if exists)
                next();
            } else { // if the student is not found we send a 404
                res.status(404).send('No student found');
            }
        
        });
    };
};
 
 