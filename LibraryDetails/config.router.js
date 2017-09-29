var app =angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/signUp');
    $stateProvider.state('signUp',{
       url:'/signUp',
       templateUrl:'views/signUp/signUp.html',
        controller:'signUpController'
   }).state('home',{
        url:'/home',
        templateUrl:'views/'
    });
});

