"use strict";

var Prom = window.Prom = function() {
  var self = {};
      callback;
  self.then = function(onSuccess) {
    callback = onSuccess;
  }
  self.resolve = function() {
    callback.apply(this, arguments);  
  }

  return self;
}
