// Requiring the original passport npm module NOT passport.js
const passport = require('passport');

module.exports = (app) => {
	// Route Handler #1 - for the google authentication page
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);
	// Route Handler #2 - for what happens after auth., we get the code to authenticate the user
	app.get(
		'/auth/google/callback',
		passport.authenticate('google')
	);

};