'use strict';

angular.module('taskManagerApp').controller('UndoneCtrl', function ($scope) {
  init();

  $scope.$on('refresh', init);

  function init() {
    $scope.filteredTasks = [];

    angular.forEach($scope.tasks, function (item) {
      if (!item.done) {
        $scope.filteredTasks.push(item);
      }
    });
  }
});
