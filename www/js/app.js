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
})
.factory('Main', function(){
      var notasUpdate = 0;
      var __hasRequestedList = false;
      var __notas;

      function __getUpdatesFromNotas(){
          return notasUpdate;
      }

      function __setUpdateToNotas(){
          notasUpdate += 1;
      }

      function __resetUpdatesFromNotas(){
          notasUpdate = 0;
      }

      function __storeNotas(notas){
          __notas = notas;
      }

      function __getNotas(){
          return __notas;
      }

      return {
          getUpdatesFromNotas: __getUpdatesFromNotas,
          setUpdateToNotas: __setUpdateToNotas,
          resetUpdatesFromNotas: __resetUpdatesFromNotas,
          hasRequestedList : function(){
              return __hasRequestedList;
          },
          requestList: function(){
              __hasRequestedList = true;
          },
          getNotas: __getNotas,
          storeNotas: function(notas){
              __storeNotas(notas);
          }

      }
});
