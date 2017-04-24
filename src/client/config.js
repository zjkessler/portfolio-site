'use strict';
var app = angular.module('mySite', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'about': {
					templateUrl: 'components/about/about.html',
					controller: 'aboutCtrl',
					controllerAs: 'vm'
				},
				'portfolio': {
					templateUrl: 'components/portfolio/portfolio.html',
					controller: 'portfolioCtrl',
					controllerAs: 'vm'
				},
				'contact': {
					templateUrl: 'components/contact/contact.html',
					controller: 'contactCtrl',
					controllerAs: 'vm'
				}
			}
		});


}]);
