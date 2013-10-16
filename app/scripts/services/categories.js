'use strict';

angular.module('taskManagerApp').factory('categories', function () {
  var categories = [
    {id: 0, title: 'Неважно'},
    {id: 1, title: 'Семья'},
    {id: 2, title: 'Работа'},
    {id: 3, title: 'Дом'}
  ]
  return {
    getCategories: function () {
      return categories;
    }
  }
});
