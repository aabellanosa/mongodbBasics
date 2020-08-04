const assert = require("assert");
const MarioChar = require("../models/mariochar");

//Describe test
describe("Saving records", function () {
  //a test
  it("Saving a record into the database", function (done) {
    var char = new MarioChar({
      name: "Mario1",
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
