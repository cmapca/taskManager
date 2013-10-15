'use strict';

angular.module('taskManagerApp').factory('dateUtils', function () {

  function swapMonthAndDate (dateString, oldSeparator, newSeparator) {
    var dateArray = dateString.split(oldSeparator);
    return dateArray[1] + newSeparator + dateArray[0] + newSeparator + dateArray[2];
  }

  return {
    toJsDate: function (dateString) {
      return swapMonthAndDate(dateString, '.', '/');
    },
    toRusDate: function (dateString) {
      return swapMonthAndDate(dateString, '/', '.');
    },
    getTodayDate: function () {
      var currentDate = new Date();
      return new Date (currentDate.getMonth() + 1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear());
    }
  }
});