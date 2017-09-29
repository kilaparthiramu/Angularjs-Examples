app.controller('signUpController',function($scope){

    $scope.user={};

    $scope.signUpisTrue = true;

    $scope.singUp = function(){
        $scope.signUpisTrue =false;
    }

    $scope.signIn = function(){
        $scope.signUpisTrue =true;
    }

});
