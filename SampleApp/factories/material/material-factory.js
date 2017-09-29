app.service('materialFactory',function($q,$http){

    this.materialInfoService  = function () {
        var deferredObject = $q.defer;
        $q.all([$http.get('https://jsonplaceholder.typicode.com/posts')]).then(function(data){
            deferredObject.resolve(data[0]);
        }, function (error) {
            deferredObject.reject({
                errorStatus: error.status
            });
        });
        return deferredObject.promise;
    };
});