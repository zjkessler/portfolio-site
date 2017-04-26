'use strict';
var app = angular.module('mySite');

app.controller('navCtrl', [function () {
	var nav = this;
	nav.links = [{
		name: 'about'
	}, {
		name: 'portfolio'
	}, {
		name: 'contact'
	}];
}]);

app.component('nav', {
	templateUrl: 'components/nav/nav.html',
	controller: 'navCtrl as nav'
});
