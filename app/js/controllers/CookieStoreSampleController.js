'use strict';

eventsApp.controller('CookieStoreSampleController', function($scope, $cookieStore) {
	$scope.event = {id:1, name:'cookie Event'};

	$scope.saveEventToCookie = function(event) {
		$cookieStore.put('event', event);
	};
	
	$scope.getEventToCookie = function() {
		console.log($cookieStore.get('event'));
	};

	$scope.removeEventToCookie = function() {
		$cookieStore.remove('event');
	};
});