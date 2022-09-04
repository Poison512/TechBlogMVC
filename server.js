const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

// import sequelize connection

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}!`);

  try {
    await sequelize.authenticate() 
    console.log('connected to db')
  } catch(err) {
    console.log(err)
  }
}); 

