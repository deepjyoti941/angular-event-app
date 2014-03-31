'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
	.factory('myCache', function($cacheFactory) {
		return $cacheFactory('myCache', {capacity:3}); //limit the capacity of cache to 3 items
	});
