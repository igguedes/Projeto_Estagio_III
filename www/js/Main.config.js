app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login',{
          url:'/login',
          controller:'LoginCtrl',
          templateUrl:'views/login.html'
      })
      .state('cadastro',{
      	  url:'/cadastro',
      	  templateUrl:'views/cadastro.html'
      })
      .state('teste',{
      	 url:'/teste',
      	 templateUrl:'views/teste.html'
      })
      .state('cadastrarNota',{
          url:'/cadastrar-nota',
          templateUrl: 'views/cadastrar-nota.html',
          controller: 'NotasCtrl'
      })
      .state('editarNota',{
          cache:false,
          url:'/editar-nota',
          templateUrl: 'views/editar-nota.html',
          controller: 'NotasCtrl'
      })
      .state('menu',{
      	  url:'/menu',
      	  abstract:true,
      	  templateUrl:'views/menu.html'
      })
      .state('menu.home',{
      	   url:'/home',
      	   views:{
      	   		'menuContent':{
      	   			templateUrl:'views/lista-notas.html',
                controller:'NotasCtrl'
      	   		}
      	   }
      })
      .state('menu.config',{
      	   url:'/config',
      	   views:{
      	   		'menuContent':{
      	   			templateUrl:'views/config.html'
      	   		}
      	   }

      })
      $urlRouterProvider.otherwise("/login");
});
