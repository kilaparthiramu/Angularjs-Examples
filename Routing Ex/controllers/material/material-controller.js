app.controller('materialController',function($scope,$q,$http,materialDetails){

    function init(materialDetails){
        $scope.materialResponse = materialDetails;
    }
    init(materialDetails);
});