"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MongoClient = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.get('/register', (req, res) => {
    res.render('register', {});
  });

  app.post('/registeruser',(req,res)=>{
    var newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          };
          DataHelpers.createNewUser(newUser, (err) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(201).send();
          }
        });

    // if (!req.body.text) {
    //   res.status(400).json({ error: 'invalid request: no data in POST body'});
    //   return;
    // }
    // else{
    //   //store it in the MongoDB

    //   var newUser = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    //   };
    //   DataHelpers.createNewUser(newUser, (err) => {
    //   if (err) {
    //     res.status(500).json({ error: err.message });
    //   } else {
    //     res.status(201).send();
    //   }
    // });
    // } //else bracket

  });




  // app.post('/registeruser', (req, res) => {
  //   res.render('register', {});
  // });

  // $ajax({
  //   type: 'GET',
  //   url: '/register',
  //   dataType: 'json',
  // });



//=================
//Initiaize App
//===================

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});










