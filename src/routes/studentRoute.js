var studentRouter = require('express').Router(),
    StudentModel = require('../models/student'),
    studentController = require('../controllers/studentCtrl')(StudentModel),
    StudentByIdMiddleware = require('../middlewares/findOneStudent')(StudentModel);


//Get the bookModel

var routes = function(){
    studentRouter.route('/')
        .post(studentController.addStudent)
        .get(studentController.findAllStudents);
    // We should should avoid repeating ourself by using a middleware to findById()
    studentRouter.use('/:studentId',StudentByIdMiddleware);
    studentRouter.route('/:studentId')
        .get(studentController.findStudent)
        .put(studentController.updateStudent)
        .patch(studentController.patchStudent)
        .delete(studentController.deleteStudent);
    return studentRouter;
};

module.exports = routes;