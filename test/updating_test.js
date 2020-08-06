const assert = require("assert");
const MarioChar = require("../models/mariochar");

//making char global so we could use it to update later
var char;

//Describe test
describe("Updating records", function () {
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario1",
      weight: 50,
    });
    char.save().then(function () {
      done();
    });

    // char2 = new MarioChar({
    //   name: "Tawing",
    //   weight: 68,
    // });
    // char2.save().then(function () {
    //   done();
    // });
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

  //a test
  it("Increasing all weights by 1", function (done) {
    MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(function () {
      MarioChar.findOne({ name: "Mario1" }).then(function (record) {
        assert(record.weight === 51);
        done();
      });
    });
  });
});
