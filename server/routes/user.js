const express = require("express");

const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all users.
userRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("Projects");
  db_connect
    .collection("User")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("User").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = userRoutes;
