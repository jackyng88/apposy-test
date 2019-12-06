const app = require('express')()

app.get('/', (req, res) => {
  res.send("CHANGED AGAIN!");
});
 
module.exports.app = app;
