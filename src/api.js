var studentRoute = require('./routes/studentRoute')();

module.exports = function() {
    return {
        studentApi: studentRoute,
    };
};