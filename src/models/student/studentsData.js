var data = [
  {
    first_name: "Brahima",
    last_name: "TRAORE",
    date_of_birth: new Date(1984, 10, 30),
    age: 34,
    gender: "M",
    town: "Longueuil",
    country: "Canada",
    phone: "452-435-5486",
    level: 6,
    courses: [],
    results: [],
    fees: 4000,
    payeed: 0
  },

  {
    first_name: "Papson",
    last_name: "Smaka",
    date_of_birth: new Date(1980, 03, 07),
    age: 38,
    gender: "M",
    town: "Bobo",
    country: "Burkina Faso",
    phone: "345-005-1110",
    level: 5,
    courses: [],
    results: [],
    fees: 5000,
    payeed: 345
  },
  {
    first_name: "Aliz",
    last_name: "Dama",
    date_of_birth: new Date(2000, 03, 07),
    age: 18,
    gender: "F",
    town: "Treich",
    country: "Cote d'Ivoire",
    phone: "670-111-453",
    level: 1,
    courses: [],
    results: [],
    fees: 4890,
    payeed: 230
  }
];

var mongodb = require("mongodb").MongoClient;
var url = "mongodb://mongo/schoolAPI";
//var url = "mongo/schoolAPI";
mongodb.connect(url, function(err, database) {
  if (err) {
    console.log(err);
    return;
  }
  var studentDB = database.db("schoolAPI");
  var Students = studentDB.collection("students");
  Students.insert(data);
  console.log("done");
  database.close();
});
