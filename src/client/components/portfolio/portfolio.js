'use strict';
var app = angular.module('mySite');

app.controller('portfolioCtrl', ['MyInfoSvc', function (MyInfoSvc) {
	var vm = this;
	vm.content = MyInfoSvc.portfolio;


}]);
app.component('portfolio', {
	templateUrl: 'components/portfolio/portfolio.html',
	controller: 'portfolioCtrl as vm'
});