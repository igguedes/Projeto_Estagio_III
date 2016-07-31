app.controller('LoginCtrl', function($scope,LoginService,Main){
	//Sempre que entrar no login o o token sera resetado

	Main.getUser().reset();

	$scope.authenticate = function(user){
			LoginService.authenticate(user.login,user.pass);
	}

});
