app.factory('LoginService',function($http,$cordovaToast,$ionicLoading,$timeout,$state){

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

	function __authenticate(login,password){
		user = {};
		user.login = login;
		user.pass = password;

		
		$state.go('menu.home');
		/*
		$http.post('http://192.168.0.110:4000/login',user).success(function(response){
			hideLoading();
			if(response == "true"){
				$state.go('menu.home');
			}else{
				$cordovaToast.showLongTop('Usuario ou senha incorretos').then(function(success) {
  				}, function (error) {

  				});
			}
		}); */



	}

	return {
		authenticate:function(login,password){
			__authenticate(login,password);
		}
	}
});
