const express = require("express");

const projectRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the projects.
projectRoutes.route("/projects").get(function (req, res) {
  let db_connect = dbo.getDb("Projects");
  db_connect
    .collection("Projects")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single project by id
projectRoutes.route("/project/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Projects").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new project.
projectRoutes.route("/project/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    project_id: req.body.project_id,
    template_id: req.body.template_id,
    project_name: req.body.project_name,
    project_desciption: req.body.project_desciption,
    project_status: req.body.project_status,
    project_progress: req.body.project_progress,
    time_start: req.body.time_start,
    time_e: req.body.time_e,
    time_deadline: req.body.time_deadline,
    team_size: req.body.team_size,
    team_members: req.body.team_members,
  };
  db_connect.collection("Projects").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = projectRoutes;
