app.controller('NotasCtrl', function($scope,$state,Main,NotasService,NotasService){
		$scope.shouldShowDelete = false;
 		$scope.shouldShowReorder = false;
 		$scope.listCanSwipe = true;

		$scope.notas = [];

		$scope.populateFormNota = function(){
				var novaNota = NotasService.getNota();
				$scope.chave = novaNota.chave;
				$scope.cnpj = novaNota.cnpj;
				$scope.dataEmissao = novaNota.dataEmissao;
		}

		$scope.listarNotas = function(){
				//Verifica se ja foi feita alguma requisição e só faz outra caso haja alguma alteração no banco de dados
				if(!Main.hasRequestedList() || Main.getUpdatesFromNotas() > 0){
							NotasService.listarNotas().success(function(response){
									$scope.notas = response.dados;
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

		$scope.excluirNota = function(idNota){
				NotasService.excluirNota(idNota);
				Main.setUpdateToNotas();
		}

		$scope.scan = function(){
				NotasService.scan();
		}

		$scope.cadastrarNota = function(){
				var novaNota = NotasService.getNota();
				NotasService.cadastrarNota(novaNota);
		}


});
