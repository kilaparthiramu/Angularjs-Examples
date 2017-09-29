var app =angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.customer = "Ramu";

});

app.directive('myDirective',function(){
    return{
        restrict:'E',
        tansclude:'true',
        link:function(scope,element,attr){
            element.append(attr.info)
        },
        templateUrl :'customer.html'
    }
});