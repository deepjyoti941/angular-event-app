'use strict';

eventsApp.controller('CompileSampleController', function($scope, $compile) {
	$scope.appendDivToElement = function(markup) {

		//compile function return a linking function and the scope is passed to that function, so markup is compiled in the scope and markup is append to targeted element on DOM
		return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
	}
});