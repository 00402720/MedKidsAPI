const express = require('express');
const db = require("./models/index");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Syncronization of the database
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the api :)" });
});


app.get('/model-structure', (req, res) => {
  const modelAttributes = Object.keys(db.userXInsignia.rawAttributes);
  const associations = db.userXInsignia.associations;
  const foreignKeyFields = [];

  if (associations) {
    Object.values(associations).forEach((association) => {
      const foreignKey = association.foreignKey;
      if (foreignKey) {
        foreignKeyFields.push(foreignKey);
      }
    });
  }

  const allFields = [...modelAttributes, ...foreignKeyFields];

  res.json(allFields);
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});