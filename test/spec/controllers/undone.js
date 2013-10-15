'use strict';

describe('Controller: UndoneCtrl', function () {

  // load the controller's module
  beforeEach(module('taskManagerApp'));

  var UndoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UndoneCtrl = $controller('UndoneCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
