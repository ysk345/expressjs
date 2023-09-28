process.env.NODE_DEV = process.env.NODE_DEV || 'development';
const express = require('./config/express');
const app = express();
app.listen(3000);
module.exports = app;

console.log('Express is running on port 3000');

// app.listen(3000, () => {
//     console.log('Express is running on port 3000')
// });