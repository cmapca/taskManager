'use strict';

angular.module('taskManagerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/done', {
        templateUrl: 'views/done.html',
        controller: 'DoneCtrl'
      })
      .when('/undone', {
        templateUrl: 'views/undone.html',
        controller: 'UndoneCtrl'
      })
      .when('/todays', {
        templateUrl: 'views/todays.html',
        controller: 'TodaysCtrl'
      })
      .when('/expired', {
        templateUrl: 'views/expired.html',
        controller: 'ExpiredCtrl'
      })
      .when('/future', {
        templateUrl: 'views/future.html',
        controller: 'FutureCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
