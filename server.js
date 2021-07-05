const express = require ('express');

const path = require ('path');

const port = process.env.PORT || 8080;
const app = express ();

const publicPath = path.join (__dirname, '.', 'dist');

app.use (express.static (publicPath));
app.get ('/*', function (req, res) {
  res.sendFile (path.join (__dirname, 'dist', 'index.html'));
});
app.listen (port, () => {
});