'use strict';

angular.module('taskManagerApp').controller('MainCtrl', function ($scope, taskResource, dateUtils) {
	var taskTemplate = {taskName: "", date: "", done: false};
	$scope.newTask = angular.copy(taskTemplate);
	$scope.tasks = taskResource.getTasks();
	$scope.datePattern = /^(((((0[1-9])|(1\d)|(2[0-8])).((0[1-9])|(1[0-2])))|((31.((0[13578])|(1[02])))|((29|30).((0[1,3-9])|(1[0-2]))))).((20[0-9][0-9])|(19[0-9][0-9])))|((29.02.(19|20)(([02468][048])|([13579][26]))))$/;
	$scope.currentDate = dateUtils.getTodayDate();
	$scope.taskFilter = undefined;

	$scope.addTask = function () {
		$scope.newTask.date = dateUtils.toJsDate($scope.newTask.date);
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
