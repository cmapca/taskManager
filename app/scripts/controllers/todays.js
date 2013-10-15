'use strict';

angular.module('taskManagerApp').controller('TodaysCtrl', function ($scope, dateUtils) {
  $scope.filteredTasks = [];
  $scope.today = dateUtils.getTodayDate().getTime();

  angular.forEach($scope.tasks, function (item) {
    if (new Date(item.date).getTime() === $scope.today) {
      $scope.filteredTasks.push(item);
    }
  });
});