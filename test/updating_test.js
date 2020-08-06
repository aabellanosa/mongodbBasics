const assert = require("assert");
const MarioChar = require("../models/mariochar");

//making char global so we could use it to update later
var char;

//Describe test
describe("Updating records", function () {
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario1",
    });
    char.save().then(function () {
      done();
    });
  });

  //a test
  it("Updates a record in the database", function (done) {
    MarioChar.findOneAndUpdate({ name: "Mario1" }, { name: "Dodo" }).then(
      function () {
        MarioChar.findOne({ _id: char._id }).then(function (result) {
          assert(result.name === "Dodo");
          done();
        });
      }
    );
  });
});
