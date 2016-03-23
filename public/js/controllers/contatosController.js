
angular.module('contact').controller('contatosController',
	function($scope,$resource,$routeParams) {

		$scope.mensagem = {texto: ''};
		$scope.contatos = [];
		$scope.total = 0;
		
		var Contato = $resource('/contatos/:id');

		if($routeParams.contatoId) {
			Contato.get({id: $routeParams.contatoId},
				function(contato) {
					$scope.contato = contato;
				},
				function(erro) {
					$scope.mensagem = {
						texto: 'Contato não existe. Novo contato.'
					};
				}
				);
		} else {
			$scope.contato = {};
		}

		$scope.salva = function() {
			$scope.contato.$save()
			.then(function() {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
					// limpa o formulário
					$scope.contato = new Contato();
				})
			.catch(function(erro) {
				$scope.mensagem = {texto: 'Não foi possível salvar'};
			});
		};

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
