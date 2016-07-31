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
      //TODAS AS CONFIGURAÇÕES GLOBAIS SERÃO DEFINIDAS AQUI
      const SERVER = "http://192.168.0.108:3000";
      var notasUpdate = 0;
      var __hasRequestedList = false;
      var __notas;
      //DADOS DE SESSAO DE USUARIO
      var __idUsuario;
      var __idEstabelecimeto = 0;
      var __usuario;
      var __token;

      function __setUser(user){
          __idUsuario = user.idUsuario;
          __idEstabelecimeto = user.idEstabelecimento;
          __usuario = user.login;
          __token = user.token;
      }

      function __getUser(){

          return {
              idUsuario: __idUsuario,
              idEstabelecimento: __idEstabelecimeto,
              usuario: __usuario,
              token: __token,
              reset: function(){
                  __idUsuario = "";
                  __idEstabelecimeto = 0;
                  __usuario = "";
                  __token = "";
              }
          }
      }


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
          getServer: function(){
              return SERVER;
          },
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
          },
          setUser: function(user){
              __setUser(user);
          },
          getUser: __getUser

      }
});
