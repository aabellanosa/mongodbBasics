const assert = require("assert");
const MarioChar = require("../models/mariochar");

//making char global so we could use it to delete later
var char;

//Describe test
describe("Deleting records", function () {
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario1",
    });
    char.save().then(function () {
      done();
    });
  });

  //a test
  it("Deletes a record from the database", function (done) {
    MarioChar.findOneAndRemove({ name: "Mario1" }).then(function () {
      MarioChar.findOne({ name: "Mario1" }).then(function (result) {
        assert(result === null);
        done();
      });
    });
  });
});
