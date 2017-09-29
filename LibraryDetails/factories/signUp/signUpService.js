app.factory('signUpService',['$rootScope','$q','$http',function($rootScope,$scope,$http,$q){

    this.signUpDetails =function(){
        $http.get('http://127.0.0.1:8081/gettingUsers').then(function(response){
            if(response.status ==200){

            }
        });
    }

}]);