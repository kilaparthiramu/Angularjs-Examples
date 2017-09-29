var app = angular.module('myApp',['ui.router','cgBusy']);
app.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'views/login/login.html',
        controller:'loginController'
    }).state('material',{
        url:'/material',
        templateUrl:'views/material/material.html'
    }).state('material.basics',{
        url:'/mBasics',
        templateUrl:'views/material/basics/basic.html',
        controller:'materialController',
        resolve:{
            materialDetails:function(materialFactory){
                return materialFactory.materialInfoService();
            }
        }
    }).state('product',{
        url:'/product',
        templateUrl:'views/product/product.html'
    }).state('sample',{
        url:'/sample',
        templateUrl:'views/sample/sample.html'
    }).state('sample.testing',{
        url:'/testing',
        templateUrl:'views/sample/testing/testing.html',
        controller:'sampleController',
        resolve:{
            sampleDetails:function(sampleFactory){
                return sampleFactory.sampleDetails();
            }
        }
    });
});