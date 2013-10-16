'use strict';

angular.module('taskManagerApp').controller('TaskManagerCtrl', function ($scope, taskResource, dateUtils, categories) {
  var taskTemplate = {id: 0, taskName: "", date: "", done: false, category: 0};
  $scope.newTask = angular.copy(taskTemplate);
  $scope.tasks = taskResource.getTasks();
  $scope.datePattern = /^(((((0[1-9])|(1\d)|(2[0-8])).((0[1-9])|(1[0-2])))|((31.((0[13578])|(1[02])))|((29|30).((0[1,3-9])|(1[0-2]))))).((20[0-9][0-9])|(19[0-9][0-9])))|((29.02.(19|20)(([02468][048])|([13579][26]))))$/;
  $scope.categories = categories.getCategories();

  $scope.addTask = function () {
    $scope.newTask.date = dateUtils.toJsDate($scope.newTask.date);
    $scope.newTask.id = getNewId();
    $scope.tasks.push($scope.newTask);
    $scope.newTask = angular.copy(taskTemplate);
    taskResource.saveTasks($scope.tasks);
    $scope.$broadcast('refresh');
  };

  $scope.finishTask = function (taskId) {
    angular.forEach($scope.tasks, function (item) {
      if (item.id == taskId) {
        item.done = true;
      }
    });
    taskResource.saveTasks($scope.tasks);
    $scope.$broadcast('refresh');
  };

  $scope.removeTask = function (taskId) {
    angular.forEach($scope.tasks, function (item, index) {
      if (item.id == taskId) {
        $scope.tasks.splice(index, 1);
      }
    });
    taskResource.saveTasks($scope.tasks);
    $scope.$broadcast('refresh');
  };

  $scope.localizeDate = function (string) {
    return dateUtils.toRusDate(string);
  }

  function getNewId() {
    var tasksLength = $scope.tasks.length;

    if (tasksLength == 0) {
      return 1;
    }

    return parseInt($scope.tasks[tasksLength - 1].id) + 1;
  }
})
;
