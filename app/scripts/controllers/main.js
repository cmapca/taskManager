'use strict';

angular.module('taskManagerApp').controller('MainCtrl', function ($scope, taskResource) {
  init();

  $scope.$on('refresh', init);

  function init() {
    $scope.tasks = taskResource.getTasks();
  }
});
