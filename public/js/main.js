angular.module('contact', ['ngRoute','ngResource']);


angular.module('contact').config(function($routeProvider) {
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'contatosController'
	})
	.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	})
	.when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'contatoController'
    })
	.otherwise({redirectTo: '/contatos'});

});
