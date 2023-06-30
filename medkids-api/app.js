const express = require('express');
const db = require("./models/index");

const app = express();
const apiRoutes = require('./routes/routes');
const adminRoutes = require('./routes/adminRoutes');

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

app.use('/api',apiRoutes);
app.use('/api',adminRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});