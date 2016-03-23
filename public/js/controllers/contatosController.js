
angular.module('contact').controller('contatosController',
	function($scope,$resource) {

		$scope.mensagem = {texto: ''};
		$scope.contatos = [];
		$scope.total = 0;
		
		var Contato = $resource('/contatos/:id');

		$scope.remove = function(contato) {
			Contato.delete({id: contato._id},
			buscaContatos,
				function(erro) {
					$scope.mensagem = {texto: 'Não foi possível remover o contato'};
				}
			);
		};

		function buscaContatos() {
			Contato.query(
				function(contatos) {					
					$scope.contatos = contatos;
				},
				function(erro) {					
					$scope.mensagem = { texto: 'Não foi possível obter a lista' };
				}
			);
		}
		buscaContatos(); 
	});
