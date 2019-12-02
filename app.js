const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Localhost!");
});
 
module.exports.app = app;
