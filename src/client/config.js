'use strict';
var app = angular.module('mySite', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {

	$stateProvider
		.state({
			views: {
				'about': {
					templateUrl: 'components/about/about.html',
					controller: 'aboutCtrl'
				},
				'portfolio': {
					templateUrl: 'components/portfolio/portfolio.html',
					controller: 'portfolioCtrl'
				},
				'contact': {
					templateUrl: 'components/contact/contact.html',
					controller: 'contactCtrl'
				}
			}
		});

}]);
