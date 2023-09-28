const port = process.env.PORT || 8080;
process.env.NODE_DEV = process.env.NODE_DEV || 'development';
const express = require('./config/express');
const app = express();
app.listen(port);
module.exports = app;

console.log('Express is running on port 8080');