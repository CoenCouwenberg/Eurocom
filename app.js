const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
// const bodyParser = require('body-parser'); <- nieuwe methode regel 7 & 8

// Middlewares
// app.use(auth);
app.use(cors());

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// FETCH
// fetch('/api/posts').then(result => {
// 	return result.json();
// }).then(data => {
// 	console.log(data);
// });

const postsRoute = require('./routes/posts');
const stappenRoute = require('./routes/stappenteller');
const wandelRoute = require('./routes/wandelsnelheid');
const zittenRoute = require('./routes/zitten');
const zitSnelheidRoute = require('./routes/zitSnelheid');
const staanRoute = require('./routes/staan');
const staanSnelheidRoute = require('./routes/staanSnelheid');
const traplopenRoute = require('./routes/traplopen');
const traplopenSnelheidRoute = require('./routes/traplopenSnelheid');

app.use('/api/posts', postsRoute);
app.use('/api/stappenteller', stappenRoute);
app.use('/api/wandelsnelheid', wandelRoute);
app.use('/api/zitten', zittenRoute);
app.use('/api/zitSnelheid', zitSnelheidRoute);
app.use('/api/staan', staanRoute);
app.use('/api/staanSnelheid', staanSnelheidRoute);
app.use('/api/traplopen', traplopenRoute);
app.use('/api/traplopenSnelheid', traplopenSnelheidRoute);
app.use(express.static("client"));
// app.use('/user', userRoute);ss

// Routses
app.get('/', (req, res) => {
	res.send('We are on home');
});

app.get('/posts', (req, res) => {
	res.send('We are on posts');
});

// Connect to the databasee
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 5000;

// Poort
app.listen(port);