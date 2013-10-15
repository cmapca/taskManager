'use strict';

angular.module('taskManagerApp').factory('taskResource', function () {
  var isLocalStorageSupported = !!localStorage;

  var localStorageError = {
    error: true,
    message: 'Local Storage is not supported in this browser'
  };

  return {
    getTasks: function () {
      if (!isLocalStorageSupported)
        return localStorageError

      return localStorage.taskManager ? JSON.parse(localStorage.taskManager) : [];
    },

    saveTasks: function (tasks) {
      localStorage.taskManager = JSON.stringify(tasks);
    }
  }
});
