app.service('materialFactory',['$rootScope','$q','$http',function($rootScope,$q, $http){


    this.materialInfoService  = function () {
        var deferredObject = $q.defer(), materialdata;
        materialdata = $http.post('https://reqres.in/api/users/2');
        $q.all([materialdata]).then(function (response) {
            deferredObject.resolve(response);
        }, function (error) {
            deferredObject.reject({
                errorStatus: error.status
            });
        });
        return deferredObject.promise;
    };
}]);