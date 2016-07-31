app.factory('LoginService',function($http,$cordovaToast,$ionicLoading,$timeout,$state,Main){


	function __authenticate(login,password){
		$ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
		user = {};
		user.login = login;
		user.pass = password;

		$http.post(Main.getServer() + '/authenticate',user).success(function(response){
				$ionicLoading.hide()
				if(response.authenticated == true){
						Main.setUser(response);
						$state.go('menu.home');
				}else{
						Main.getUser().reset();
						Main.setUpdateToNotas();
						$cordovaToast.showLongTop('Usuario ou senha incorretos').then(function(success) {
  					}, function (error) {

  					});
					}
				});

	}

	return {
		authenticate:function(login,password){
			__authenticate(login,password);
		}
	}
});
