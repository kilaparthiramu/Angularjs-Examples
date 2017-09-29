var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('login');
    $stateProvider.state('login',{
       url:'/login',
       templateUrl:'views/login/login.html',
        controller:'loginController'
    })
});