const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/routing-app'));
<<<<<<< HEAD
app.get('*', function (req, res) {
=======
app.get('/*', function (req, res) {
>>>>>>> 511f8d27f73388992a5eff0f5db42f2f35279117
  res.sendFile(path.join(__dirname + '/dist/routing-app/index.html'));
});
app.listen(process.env.PORT || 8080);
