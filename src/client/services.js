'use strict';
var app = angular.module('mySite');

app.service('MyInfoSvc', function () {
	var svc = this;

	svc.contact = {
		street: '350 S 200 E, #406',
		city: 'Salt Lake City',
		state: 'Utah',
		zip: '84111',
		phone: '801-230-0347',
		email: 'zjkessler@gmail.com'
	};

	svc.portfolio = [{
			title: 'The Flybox',
			img: 'assets/img/fish Screen Shot 2017-04-25 at 6.14.26 PM.png',
			url: 'https://fly-fishing.herokuapp.com/',
			description: 'A full stack web application that allows for fly-fishing blog curation.',
			content: ['AngularJS MVC used to consume Feedly API requests', 'Custom RESTful node.js server with JSON requests to MongoDB'],
	},
		{
			title: 'Jazz-Preview',
			img: 'assets/img/jazzScreen Shot 2017-04-25 at 6.14.58 PM.png',
			url: 'https://jazz-preview.herokuapp.com/',
			description: 'An interview project, requesting to combine 3 pages from the old Jazz website into 1 modern page.',
			content: ['AngularJS with Angular Material & UI Bootstrap'],
	}, {
			title: 'Baby-Registry(Group-project)',
			img: 'assets/img/babyScreen Shot 2017-04-25 at 6.15.11 PM.png',
			url: 'http://sweet-registry.herokuapp.com/#/',
			description: 'A full stack MEAN application which allows a mom to create registry for their babies.',
			content: ['Modular AngularJS front-end with custom RESTful backend for searching and creating registries', 'Requests using Walmart API', 'Bootstrap for page layout and formatting'],
					}];

	svc.about = {
		quote: 'some-quote',
		rightNow: '',
		cover1: 'I love to learn (I mean love with a capital L). I read everything I can get my eyes on, from books to blogs to user docs. I find taking on new and challenging projects to be most rewarding. I also love building and creating things. A few examples of things I have built and/or designed are road bikes, a business, and different web applications, all from nothing. ',
		cover2: 'I am passionate about continuous learning, challenging problems, and product development, which is why I am looking for a job in web/software development. I love every aspect of software development and have knowledge of both front-end and back-end technologies: Node.js, Javascript (jQuery, AngularJs), MongoDB, CSS, and HTML.'
	};
});
