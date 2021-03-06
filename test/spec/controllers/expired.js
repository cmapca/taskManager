'use strict';

describe('Controller: ExpiredCtrl', function () {

  // load the controller's module
  beforeEach(module('taskManagerApp'));

  var ExpiredCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpiredCtrl = $controller('ExpiredCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
