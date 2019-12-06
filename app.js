const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody quick demo!");
});
 
module.exports.app = app;
