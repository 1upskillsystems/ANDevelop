const express = require("express");

const templateRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the projects.
templateRoutes.route("/templates").get(function (req, res) {
  let db_connect = dbo.getDb("Projects");
  db_connect
    .collection("Templates")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
templateRoutes.route("/template/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Templates").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = templateRoutes;
