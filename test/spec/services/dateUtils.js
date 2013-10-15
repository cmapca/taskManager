'use strict';

describe('Service: dateUtils', function () {

  // load the service's module
  beforeEach(module('taskManagerApp'));

  // instantiate service
  var dateUtils;
  beforeEach(inject(function (_dateUtils_) {
    dateUtils = _dateUtils_;
  }));

  it('should do something', function () {
    expect(!!dateUtils).toBe(true);
  });

});
