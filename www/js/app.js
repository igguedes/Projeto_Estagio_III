var app = angular.module('InvoiceManager', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
        if (ionic.Platform.isAndroid()) {
            StatusBar.backgroundColorByHexString("#0c5149");
        }
        else{
          StatusBar.styleLightContent();
        }

        //StatusBar.styleDefault();
    }
  });
});

/* .controller('Teste',function($scope,$http,$cordovaActionSheet,$cordovaBarcodeScanner){
    var options = {
        title: 'What do you want with this image?',
        buttonLabels: ['Share via Facebook', 'Share via Twitter'],
        addCancelButtonWithLabel: 'Cancel',
        androidEnableCancelButton : true,
        winphoneEnableCancelButton : true,
        addDestructiveButtonWithLabel : 'Delete it'
      };

    $scope.show = function(){

    $cordovaActionSheet.show(options)
          .then(function(btnIndex) {
            var index = btnIndex;
          });

    }

    var codigosDeBarras = [];

    //192.168.0.110:4000
    $scope.dados = [];

    /* $scope.carregarDados = function(){
        $http.get('http://api.postmon.com.br/v1/cep/63115030').success(function(response){
            alert("carregou");
            $scope.dados = response;
        });
    }

    $scope.carregarDados();

    $scope.scan = function(){
      $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        //alert(barcodeData.text)

      }, function(error) {
        alert(error);
      });
    }
}) */
