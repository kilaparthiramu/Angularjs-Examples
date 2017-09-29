app.factory('signInService',['$rootScope','$q','$http',function($rootScope,$scope,$http,$q){

    this.signInDetails =function(){
        $http.get('http://127.0.0.1:8081/gettingUsers').then(function(response){
            if(response.status ==200){
                $scope.userDetails = response;

            }
        });
    }

}]);