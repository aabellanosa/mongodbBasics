const mongoose = require("mongoose");

//do this before mocha tests; promise directive
before(function (done) {
  //connect to mongodb
  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  //listen to when it establishes connection
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made.");
      done();
    })
    .on("error", function (error) {
      console.log("Connection error", error);
    });
});

//drop collections before EACH tests
beforeEach(function (done) {
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});
