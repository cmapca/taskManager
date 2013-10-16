'use strict';

angular.module('taskManagerApp').controller('DoneCtrl', function ($scope) {
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
    $scope.filteredTasks = [];
    angular.forEach($scope.tasks, function (item) {
      if (item.done) {
        $scope.filteredTasks.push(item);
      }
    });
  }
});
