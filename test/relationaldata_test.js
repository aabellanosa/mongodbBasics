const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

//describe the tests
describe("Testing relational model Author", function (done) {
  //drop db before each test
  beforeEach(function (done) {
    mongoose.connection.collections.authors.drop();
    done();
  });

  //create a test
  it("Create an author record", function (done) {
    var dodo = new Author({
      name: "Dodo",
      age: 52,
      books: [{ title: "Higans Tols The Wind", pages: 368 }],
    });

    dodo.save().then(function () {
      Author.findOne({ name: "Dodo" }).then(function (result) {
        assert(result.books.length === 1);
        done();
      });
    });
  });

  it("Adding a book to existing Author", function (done) {
    var dodo = new Author({
      name: "Dodo",
      age: 52,
      books: [{ title: "Higans Tols The Wind", pages: 368 }],
    });

    dodo.save().then(function () {
      Author.findOne({ name: "Dodo" }).then(function (record) {
        record.books.push({ title: "Higans the Sequel", pages: 69 });
        record.save().then(function (result) {
          assert(result.books.length === 2);
          done();
        });
      });
    });
  });
});
