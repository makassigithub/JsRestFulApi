var server = require("./src/serverConfig")(),
  //api = require('./src/api')(),
  studentRoutes = require("./src/routes/studentRoute")(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://mongo/schoolAPI");
var port = process.env.PORT || 3000;
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// using routes;
server.use("/api/v1/student", studentRoutes);
server.get("/", function(req, res) {
  res.send("Welcome to the API");
});

// listening to ports
server.listen(port, function() {
  console.log("listening to port: ", port);
});
