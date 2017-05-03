'use strict';
var app = angular.module('mySite');

app.controller('aboutCtrl', ['MyInfoSvc', function (MyInfoSvc) {
	var vm = this;

	vm.about = MyInfoSvc.about;
}]);
app.component('about', {
	templateUrl: 'components/about/about.html',
	controller: 'aboutCtrl as vm'
});
