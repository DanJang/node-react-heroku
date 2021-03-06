// server/index.js

const path = require('path');
const express = require("express")
const PORT = process.env.PORT || 3001;
// const PORT = process.env.PORT || 8888;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Daniel server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, ()=>{
	console.log('server listening on ${PORT}');
});
