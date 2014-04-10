'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider.when('/newEvent', 
		{
			templateUrl:'/templates/NewEvent.html',
			controller: 'EditEventController'
		});

		$routeProvider.when('/events', 
		{
			templateUrl: '/templates/EventList.html',
			controller: 'EventListController'
		});

		$routeProvider.when('/event/:eventId', 
		{
			templateUrl: '/templates/EventDetails.html',
			controller: 'EventController'
		});

		$routeProvider.otherwise({ redirectTo:'/events'});

		$routeProvider.when('/sample-directive', {
			templateUrl: '/templates/SampleDirective.html',
			controller: 'SampleDirectiveController'
		});

		$routeProvider.when('/new-event', {
			templateUrl: '/templates/NewEvent.html',
			controller: 'EditEventController'
		});

		$locationProvider.html5Mode(true);  // for html 5 routing i.e removing # sign in routing
	});