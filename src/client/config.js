'use strict';
var app = angular.module('mySite', ['ui.router', 'ngAnimate', 'ngMaterial']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

	$locationProvider.hashPrefix('')
		.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$mdThemingProvider.theme('default')
		.primaryPalette('orange')
		.accentPalette('light-blue');

	//	$stateProvider
	//		.state('home', {
	//			url: '/',
	//			views: {
	//				'about': {
	//					templateUrl: 'components/about/about.html',
	//					controller: 'aboutCtrl',
	//					controllerAs: 'vm'
	//				},
	//				'portfolio': {
	//					templateUrl: 'components/portfolio/portfolio.html',
	//					controller: 'portfolioCtrl',
	//					controllerAs: 'vm'
	//				},
	//				'contact': {
	//					templateUrl: 'components/contact/contact.html',
	//					controller: 'contactCtrl',
	//					controllerAs: 'vm'
	//				}
	//			}
	//		});


}]);
