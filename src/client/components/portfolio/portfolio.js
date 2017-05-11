'use strict';
var app = angular.module('mySite');

app.controller('portfolioCtrl', ['MyInfoSvc', function (MyInfoSvc) {
	var vm = this;
	vm.content = MyInfoSvc.portfolio;

	vm.hideButton = hideButton();
	vm.showButton = showButton();


	///////////////////////////	
	function hideButton() {
		$('.live-button').show();
		console.log(event);
	}

	function showButton() {

		$('.live-button').hide();
		console.log('show button active');
	}

}]);
app.component('portfolio', {
	templateUrl: 'components/portfolio/portfolio.html',
	controller: 'portfolioCtrl as vm'
});