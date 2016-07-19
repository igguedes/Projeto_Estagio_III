app.factory('LoginService',function($http,$cordovaToast,$ionicLoading,$timeout,$state){

	var showLoading = function(){
			$ionicLoading.show({
      			template: '<ion-spinner></ion-spinner>'
    		}).then(function(){
       			
    		});
	}

	var hideLoading = function(){
		$ionicLoading.hide().then(function(){

    	});
	}

	function __authenticate(login,password){
		user = {};
		user.login = login;
		user.pass = password;

		
		showLoading();
		$timeout(function() {
			hideLoading();
		}, 1000);
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