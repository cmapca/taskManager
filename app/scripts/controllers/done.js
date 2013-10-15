'use strict';

angular.module('taskManagerApp').controller('DoneCtrl', function ($scope) {
  $scope.filteredTasks = [];

  angular.forEach($scope.tasks, function (item) {
    if (item.done) {
      $scope.filteredTasks.push(item);
    }
  });
});
