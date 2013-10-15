'use strict';

angular.module('taskManagerApp').controller('MainCtrl', function ($scope, taskResource, dateUtils) {
  $scope.tasks = taskResource.getTasks();
});
