const express = require('express');
const app = express()
const port = 3000

//app.use(express.static("public"))

//Set the viewing engine to PUG.
app.set('view engine', 'pug');

//Send a message for the home directory of Hello World
//app.get("/", (req, res) => {
//	res.send("Hello");
//});

app.get('/', (req, res) => {
	res.render('index', {title: "My Website", message: "Welcome to Hana's Website", text: "Hana was here"});
});

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const mySpace = require('./routes/myspace')
app.use('/myspace', mySpace)

//function logger(req, res, next) {
//	console.log(req.originalUrl)
//	next()
//}

//Make the app listen on port (localhost:3000)
app.listen(port, () => {
	console.log("Express app listening on port 3000");
});