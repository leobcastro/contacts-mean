var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'add7f37e7477e5ed7754',
		clientSecret: 'cd71d3c4d4b9337a9baa3f04dae16bc2a6e06f08',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{ "login" : profile.username},
			{ "nome" : profile.username},
			function(erro, usuario) {
				if(erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
			);
	}));

	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});
};