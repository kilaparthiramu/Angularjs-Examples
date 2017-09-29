var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/html');
    $stateProvider.state('html',{
        url:'/html',
        template:'<h1>html</h1>'
    }).state('css',{
        url:'/css',
        template:'<h1>css</h1>'
    }).state('bootstrap',{
        url:'/bootstrap',
        template:'<h1>bootstrap</h1>'
    });
});


/*
var app =angular.module('myApp',['ui.router']);
app.config(function($stateProvider){
    $stateProvider.state('Material',{
        url:'/material',
        templateUrl:'views/material/material.html',
       /!* controller:'materialController',*!/
        /!*resolve:{
            materialDetails:function(materialFactory){
                return materialFactory.materialInfoService();
            }
        }*!/
    })
});*/
