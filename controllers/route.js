/**
 * Created by thotar on 6/3/2017.
 */
var app = angular.module('App', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',

    }).
    when('/angular', {
        templateUrl: 'views/angularJS.html',
    }).
    when('/programinglanguages', {
        templateUrl: 'views/programing.html',
    }).
    when('/databasemanagement', {
        templateUrl: 'views/databasemanagement.html',
    }).when('/webtech', {
        templateUrl: 'views/webtechnologies.html',
    }).when('/loginreg', {
        templateUrl: 'views/login-reg.html',
    })
}]);
