app.controller('NotasCtrl', function($scope,$state,Main,NotasService,NotasService){
		$scope.shouldShowDelete = false;
 		$scope.shouldShowReorder = false;
 		$scope.listCanSwipe = true;


		$scope.notas = [];

		$scope.populateFormNota = function(){

				var novaNota = NotasService.getNota();
				$scope.nota = {};
				$scope.nota.chave = novaNota.chave;
				$scope.nota.cnpj = novaNota.cnpj;
				$scope.nota.dataEmissao = novaNota.data_emissao;
				$scope.nota.emissor = novaNota.emissor;
				$scope.nota.valor1 = novaNota.valor;
				$scope.nota.valor2 = novaNota.valor;
		}

		$scope.listarNotas = function(){
				//Verifica se ja foi feita alguma requisição e só faz outra caso haja alguma alteração no banco de dados
				if(!Main.hasRequestedList() || Main.getUpdatesFromNotas() > 0){
							NotasService.listarNotas().success(function(response){
									$scope.notas = response;
									Main.requestList();
									Main.resetUpdatesFromNotas();
									Main.storeNotas($scope.notas);
									
							});
				}
				else{
						$scope.notas = Main.getNotas();

				}


		}

		$scope.$on("$ionicView.afterEnter", function(){
				if($state.is('cadastrarNota') || $state.is('editarNota')){
						$scope.populateFormNota();
				}
				if($state.is('menu.home')){
						$scope.listarNotas();
				}
		});



  	$scope.scan = function(){
				NotasService.scan();
    }

		$scope.editarNota = function(nota){
				NotasService.setNota(nota);
				$state.go('editarNota');

		}

		$scope.atualizarNota = function(nota){
				id = NotasService.getNota().id_nota;
				NotasService.setNota(nota);
				NotasService.atualizarNota(id);
		}

		$scope.excluirNota = function(idNota){
				NotasService.excluirNota(idNota);
				Main.setUpdateToNotas();
		}

		$scope.scan = function(){
				NotasService.scan();
		}

		$scope.cadastrarNota = function(nota){
				NotasService.setNota(nota);
				NotasService.cadastrarNota();
		}


});
