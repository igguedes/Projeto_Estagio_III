app.factory('NotasService',function($http,$cordovaBarcodeScanner,$state,$cordovaDialogs,$ionicLoading){
	var __nota;

	function __getNota(){
			return __nota;
	}

	function __setNota(nota){
			__nota = nota;
	}

	function notaExist(codigoDeBarras){
			for(var i = 0; i< notas.length; i++){
					if(notas[i].codigo == codigoDeBarras) return true;
			}
			return false;
	}

	var showLoading = function(){
			$ionicLoading.show({
      			template: '<ion-spinner></ion-spinner>'
    		}).then(function(){
       			//pass
    		});
	}

	var hideLoading = function(){
		$ionicLoading.hide().then(function(){
				//pass
		});
	}

	function __listarNotas(){
		 showLoading();
		 return $http.get("https://cryptic-tundra-32566.herokuapp.com/teste").success(function(){
			 		hideLoading();
		 });
	}

	function __cadastrarNota(novaNota){
			notas.push(novaNota);
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
							var nf = {};
							data = codigoDeBarras.substring(2,6);
							nf.chave = codigoDeBarras;
							nf.ano = "20" + data.substring(0,2);
							nf.mes = new Number(data.substring(2,4)) + 1;
							nf.dataEmissao = "1/" + nf.mes + "/"+ nf.ano;
							nf.cnpj = codigoDeBarras.substring(6,20).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

							__setNota(nf);
							$state.go('cadastrarNota');
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
			cadastrarNota : function(n){
					__cadastrarNota(n);
			},
			excluirNota: function(idNota){
					__excluirNota(idNota);
			}
	}
});
