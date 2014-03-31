'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {

	$scope.sortorder = 'name';
	$scope.event = eventData.getEvent(); //$scope.event store the promise returned by deffered created in eventData service
	//console.log($scope.event);

	//access the actual event object inside the controller as follows

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	};
	
	$scope.downVoteSession = function (session) {
		session.upVoteCount--;
	};
});