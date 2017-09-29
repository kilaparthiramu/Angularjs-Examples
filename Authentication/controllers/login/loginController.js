app.controller('loginController',function($scope){

    $scope.loginisTrue = true;
    $scope.register = function(){
        $scope.loginisTrue = false;
    }
    $scope.registered = function () {

        $scope.loginisTrue = true;
    }

});