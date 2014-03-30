'use strict';

eventsApp.controller('EventController', function EventController($scope) {

	$scope.sortorder = 'name';
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
				abstract: 'In this session you will learn the ins and outs of directive!',
				upVoteCount:0
			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'jhon doe',
				duration: '1 hr',
				level: 'Introductory',
				abstract: 'In this session you will learn the ins and outs of scopes!',
				upVoteCount:0
			},
			{
				name: "well behaved controller",
				creatorName: 'jan doe',
				duration: '1 hr',
				level: 'Intermediate',
				abstract: 'In this session you will learn the ins and outs of controllers!',
				upVoteCount:0
			}
		]
	}

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};
	
	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};
});