'use strict';
var app = angular.module('mySite');

app.controller('contactCtrl', ['MyInfoSvc', function (MyInfoSvc) {
	var vm = this;

	vm.about = 'about';
	vm.contact = MyInfoSvc.contact;
}]);
