import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

angular.module('simple-todos', [
  angularMeteor
]);
