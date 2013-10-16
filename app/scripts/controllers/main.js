'use strict';

angular.module('taskManagerApp').controller('MainCtrl', function ($scope, taskResource) {
  $scope.category = 0;
  init();

  $scope.$on('refresh', init);

  $scope.$watch('category', function () {
    if ($scope.category == 0) {
      $scope.categoryFilter = {};
    }
    else {
      $scope.categoryFilter = {
        category: $scope.category
      }
    }

  });

  function init() {
    $scope.tasks = taskResource.getTasks();
  }
});
