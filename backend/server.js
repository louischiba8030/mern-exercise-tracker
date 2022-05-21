// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
const mongooseOptions = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
//		useCreateIndex: true 
};

mongoose.connect(
	process.env.ATLAS_URI,
	mongooseOptions
);
const db = mongoose.connection;
db.once('open', () => {
	console.log("MongoDB database connection established successfully.");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
