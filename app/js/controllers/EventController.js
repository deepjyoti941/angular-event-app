'use strict';

eventsApp.controller('EventController', function EventController($scope) {

	$scope.event = {
		name: 'Angular Boot Camp',
		date: '1/1/2013',
		time: '10:30 am',
		location: {
			address: 'Google Headquater',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: '/img/angularjs-logo.png',
		sessions: [
			{
				name: 'Directive Masterclass',
				creatorName: 'Bob smith',
				duration: '1 hr',
				level: 'Advanced',
				abstract: 'In this session you will learn the ins and outs of directive!'
			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'jhon doe',
				duration: '1 hr',
				level: 'Biginner',
				abstract: 'In this session you will learn the ins and outs of scopes!'
			},
			{
				name: "well behaved controller",
				creatorName: 'jan doe',
				duration: '1 hr',
				level: 'Intermediate',
				abstract: 'In this session you will learn the ins and outs of controllers!'
			}
		]
	}
	
});