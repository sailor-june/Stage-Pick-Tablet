const express = require('express');
const app = express();
const path = require('path');

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// handle GET request to '/' route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
