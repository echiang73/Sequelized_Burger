var db = require("../models"); // Added Sequelize Model reference

module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    console.log(req.body.pickedup);
    db.Burger.create({
      burger_name: req.body.burger_name,
      pickedup: req.body.pickedup // false
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // PUT route for updating burger
  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.body);
    console.log(req.body.pickedup);
    db.Burger.update({
      pickedup: req.body.pickedup // true
    },{
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // DELETE route for deleting burger
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

};
// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.selectAll("burgers", function(res) { // instead of orm.all
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) { // instead of orm.create
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) { // instead of orm.update
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;
