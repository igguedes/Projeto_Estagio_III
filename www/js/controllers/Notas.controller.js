app.controller('NotasCtrl', function($scope,$state,NotasService,$cordovaBarcodeScanner,NotasService){
	$scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true;

	$scope.notas = NotasService.listarNotas();

  $scope.scan = function(){
      $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        	alert("Codigo escaneado " + barcodeData.text)

      }, function(error) {
        alert(error);
      });
    }

		$scope.selectNota = function(nota){
				NotasService.setNota(nota);
				//$state.go();
		}


});
