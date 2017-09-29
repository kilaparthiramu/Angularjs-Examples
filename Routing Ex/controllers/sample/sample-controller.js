app.controller('sampleController',function($scope,$q,$http,sampleDetails){

    function init(sampleDetails){
        $scope.response = sampleDetails[0].data;
    }
    init(sampleDetails);
});