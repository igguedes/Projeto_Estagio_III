app.factory('NotasService',function($http,$cordovaBarcodeScanner,$state,$cordovaDialogs,$ionicLoading,Main){
	var __nota;

	function __getNota(){
			return __nota;
	}

	function __setNota(nota){
			__nota = nota;
	}



	function __listarNotas(){
		$ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
		 return $http.get(Main.getServer() + "/notas/estabelecimento/" + Main.getUser().idEstabelecimento).success(function(response){
					response.map(function(campo){
							var data = new Date(campo.data_emissao);
							campo.data_emissao = data.getDate() + "/" + (data.getMonth() +1) + "/" + data.getFullYear();
					});
					$ionicLoading.hide();
		 }).error(function(error){
			 		$ionicLoading.hide();
		 });

	}

	function __cadastrarNota(){
			var novaNota = __getNota();
			$http.post(Main.getServer() +'/nova-nota/estabelecimento/' + Main.getUser().idEstabelecimento,
								novaNota).success(function(response){

								});
	}

	function __atualizarNota(id){
			console.log(id);
			var novaNota = __getNota();
			$http.post(Main.getServer() + "/update/nota/" + id , novaNota).success(function(response){
					console.log(response);
					Main.setUpdateToNotas();
					
			});
	}

	function __excluirNota(idNota){
			$cordovaDialogs.confirm('Tem certeza que deseja excluir essa nota?', 'Confirmar exclusão!', ['sim','não'])
			.then(function(buttonIndex) {
						var btnIndex = buttonIndex;
						alert(btnIndex);
			});
	}


	function __scan(){
			$cordovaBarcodeScanner
			.scan()
			.then(function(barcodeData) {
					var codigoDeBarras = barcodeData.text;
					if(codigoDeBarras.length < 44 || codigoDeBarras.length > 44){
							alert("Codigo invalido");
					}else{
							$ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
							$http.get(Main.getServer() + "/check-nota/" + codigoDeBarras).success(function(response){
									$ionicLoading.hide();
									if(response.exist == true){
											$cordovaDialogs.confirm('Nota já cadastrada, deseja atualiza-la?', 'Invoice Manager',
											['sim','não'])
											.then(function(buttonIndex) {
														var btnIndex = buttonIndex;
														if(btnIndex == 1){
																var nf = {};
																var data = new Date(response.nota.data_emissao);
																nf.chave = response.nota.chave;
																nf.cnpj = response.nota.cnpj_emissor;
																nf.emissor = response.nota.emissor;
																nf.valor = response.nota.valor;

																nf.data_emissao = data.getDate() + "/" + (data.getMonth() +1) + "/" + data.getFullYear();
																__setNota(nf);
																$state.go("editarNota");
														}else{
																$state.go("menu.home");
														}
											});
									}else{
											var nf = {};
											data = codigoDeBarras.substring(2,6);
											nf.chave = codigoDeBarras;
											nf.ano = "20" + data.substring(0,2);
											nf.mes = new Number(data.substring(2,4)) + 1;
											nf.data_emissao = "1/" + nf.mes + "/"+ nf.ano;
											nf.cnpj = codigoDeBarras.substring(6,20).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

											__setNota(nf);
											$state.go('cadastrarNota');
									}
							});
					}

			}, function(error) {
				alert(error);
			});
	}


	return {
			scan : __scan,
			getNota : __getNota,
			setNota : function(nota){
					__setNota(nota);
			},
			listarNotas : __listarNotas,
			cadastrarNota : __cadastrarNota,
			atualizarNota: function(id){
				 __atualizarNota(id);
			},
			excluirNota: function(idNota){
					__excluirNota(idNota);
			}
	}
});
