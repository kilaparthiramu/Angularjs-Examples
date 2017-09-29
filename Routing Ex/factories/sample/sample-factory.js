app.service('sampleFactory',['$rootScope','$q','$http',function($rootScope,$q,$http){


    this.sampleDetails = function(){
        var deferredObject = $q.defer(),sampleData;
        var data = {"b":"bbb"};
        sampleData = $http.post('http://ptc-cdee-test-rest-client.herokuapp.com/noauth/articles.json',data);
        $q.all([sampleData]).then(function (response) {
            deferredObject.resolve(response);
        }, function (error) {
            deferredObject.reject({
                errorStatus: error.status
            });
        });
        return deferredObject.promise;
    };
}]);
