const express = require('express');
const mongoose = require('mongoose');
const port = 7777;
const app = express();
require('dotenv').config({ path: 'variables.env' })

app.set('view engine', 'ejs'); // Set template engine (alternatively can use pug)
app.use(express.static('public')); // Use public directory when serving assets

/* Database Setup */
// Configure Database before uncommenting the following code

// mongoose.connect(process.env.DATABASE,
// 	{ 
// 		auth: {
// 		user: process.env.DB_USER,
// 		password: process.env.DB_PASS
// 	},
// 	useNewUrlParser: true 
// });

// const db = mongoose.connection;

// db.on('error', (err) => {
// 	console.error(`Database Error: ${err.message}`);
// });

/* Routes */

app.get('/', function(req, res) {
	res.render('index');
});

app.get('*', function(req, res) {
	res.render('404');
});

app.listen(port, function(){
	console.log('Server started');
});