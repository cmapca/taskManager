'use strict';

angular.module('taskManagerApp').controller('ExpiredCtrl', function ($scope, dateUtils) {
  $scope.filteredTasks = [];
  $scope.today = dateUtils.getTodayDate().getTime();

  angular.forEach($scope.tasks, function (item) {
    if (!item.done && new Date(item.date).getTime() < $scope.today) {
      $scope.filteredTasks.push(item);
    }
  });
});