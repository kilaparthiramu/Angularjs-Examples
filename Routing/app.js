var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('HTML',{
        url:'/html',
        templateUrl:'views/html/html.html'
    }).state('HTML.HTMLTUTORIALS', {
        url: '/htmlTotorials',
        templateUrl: 'views/html/htmlTemplates/htmlTemplate.html'
    }).state('CSS',{
        url:'/css',
        templateUrl:'views/css/css.html'
    }).state('JAVASCRIPT',{
        url:'/javascript',
        templateUrl:'views/javascript/javascript.html'
    }).state('SQL',{
        url:'/sql',
        templateUrl:'views/sql/sql.html'
    }).state('PHP',{
        url:'/php',
        templateUrl:'views/php/php.html'
    }).state('BOOTSTRAP', {
        url: '/bootstrap',
        templateUrl: 'views/bootstrap/bootstrap.html'
    }).state('JQUERY', {
        url: '/jquery',
        templateUrl: 'views/jquery/jquery.html'
    });
});