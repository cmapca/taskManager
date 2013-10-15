'use strict';

angular.module('taskManagerApp').controller('MainCtrl', function ($scope, taskResource) {
	var taskTemplate = {taskName: "", date: "", done: false};
	$scope.newTask = angular.copy(taskTemplate);
	$scope.tasks = taskResource.getTasks();

	$scope.addTask = function () {
		$scope.tasks.push($scope.newTask);
		$scope.newTask = angular.copy(taskTemplate);
		taskResource.saveTasks($scope.tasks);
	};

	$scope.finishTask = function (task) {
		task.done = true;
		taskResource.saveTasks($scope.tasks);
	};

	$scope.removeTask = function (taskIndex) {
		$scope.tasks.splice(taskIndex, 1);
		taskResource.saveTasks($scope.tasks);
	};

});
