'use strict';
var app = angular.module('mySite');

app.controller('navCtrl', ['MyInfoSvc', function (MyInfoSvc) {
	var nav = this;

	nav.links = [{
		name: MyInfoSvc.contact.emailto,
		icon: "mail"
	}, {
		name: MyInfoSvc.contact.linkedin,
		icon: "linkedin"
	}, {
		name: MyInfoSvc.contact.github,
		icon: "github-circle"
	}];
}]);

app.component('nav', {
	templateUrl: 'components/nav/nav.html',
	controller: 'navCtrl as nav'
});