'use strict';

angular.module('taskManagerApp').controller('ExpiredCtrl', function ($scope, dateUtils) {
  $scope.today = dateUtils.getTodayDate().getTime();
  $scope.category = 0;

  init()

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
      if (!item.done && new Date(item.date).getTime() < $scope.today) {
        $scope.filteredTasks.push(item);
      }
    });
  }
});