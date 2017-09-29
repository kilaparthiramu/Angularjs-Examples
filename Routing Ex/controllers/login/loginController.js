app.controller('loginController',function($scope,$q,$http,$state){

    $scope.login = function() {
        $scope.myPromise  = $http.post('https://reqres.in/api/users/2').then(function (response) {
            console.log(response);
                $state.go('material');
        },function(error){
            alert("Invalid credentials");
        });
    };
    function init(){
        console.log("hai");
    }
    init();
});