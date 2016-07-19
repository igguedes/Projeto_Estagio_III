app.controller('LoginCtrl', function($scope,LoginService){
	
	$scope.authenticate = function(user){
		LoginService.authenticate(user.login,user.pass);
	}
});