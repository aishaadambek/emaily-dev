const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		// We set cookie to last for 30 days (in microsec)
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

// Telling passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

/**
 *	A require statement returns an arrow function because
 *	this is what we have returned from authRoutes.js file
 *	and we pass app as an argument
 */
require('./routes/authRoutes')(app);

// Dynamic host binding as we do not know 
// what port Heroku will grant to our app
const PORT = process.env.PORT || 5000;
app.listen(PORT); 
