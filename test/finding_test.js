const assert = require("assert");
const MarioChar = require("../models/mariochar");

//Describe test
describe("Finding records", function () {
  beforeEach(function (done) {
    var char = new MarioChar({
      name: "Mario1",
    });
    char.save().then(function () {
      console.log("done saving a record");
      done();
    });
  });

  //a test
  it("Finds a record from the database", function (done) {
    MarioChar.findOne({ name: "Mario1" }).then(function (result) {
      assert(result.name === "Mario1");
      done();
    });
  });
});
