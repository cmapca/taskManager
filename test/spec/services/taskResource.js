'use strict';

describe('Service: taskResource', function () {

  // load the service's module
  beforeEach(module('taskManagerApp'));

  // instantiate service
  var taskResource;
  beforeEach(inject(function (_taskResource_) {
    taskResource = _taskResource_;
  }));

  it('should do something', function () {
    expect(!!taskResource).toBe(true);
  });

});
