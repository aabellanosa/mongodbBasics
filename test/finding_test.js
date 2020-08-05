const assert = require("assert");
const MarioChar = require("../models/mariochar");

//making char global so we could use it to find by id
var char;

//Describe test
describe("Finding records", function () {
  beforeEach(function (done) {
    char = new MarioChar({
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

  //finding by id (which is an object)
  it("Finds a record by id from the database", function (done) {
    MarioChar.findOne({ _id: char._id }).then(function (result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
