'use strict';

angular.module('taskManagerApp').controller('ExpiredCtrl', function ($scope, dateUtils) {
  $scope.today = dateUtils.getTodayDate().getTime();

  init()

  $scope.$on('refresh', init);

  function init() {
    $scope.filteredTasks = [];
    angular.forEach($scope.tasks, function (item) {
      if (!item.done && new Date(item.date).getTime() < $scope.today) {
        $scope.filteredTasks.push(item);
      }
    });
  }
});