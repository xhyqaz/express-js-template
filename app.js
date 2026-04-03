const express = require('express');
const app = express()
const port = 3000


//Set the viewing engine to PUG.
app.set('view engine', 'pug');

//Send a message for the home directory of Hello World
app.get("/", (req, res) => {
	res.send("Hello, World!");
});
app.get('/pug', (req, res) => {
	res.render('index', {title: "Pug", message: "Welcome"});
});

//Make the app listen on port (localhost:3000)
app.listen(port, () => {
	console.log("Express app listening on port 3000");
});
