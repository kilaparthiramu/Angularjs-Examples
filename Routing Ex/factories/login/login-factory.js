app.service('loginFactory',['$rootScope','$q','$http',function($rootScope,$q,$http){

    this.loginDetails = function() {
        $http.post('https://reqres.in/api/users/2').then(function (response) {
            if (response.status == 200) {
                $state.go('/material');
            } else {
                "error";
            }
        });
    };
}]);
