'use strict';

eventsApp.directive('greeting', function($compile) {
	return {
		restrict: 'E',
		replace: true,
		priority: -1,
		template: "<button class='btn' ng-click='sayHello()'>Say hello</button>",
		controller: function($scope) {
			var greetings = ['hello'];
			$scope.sayHello = function() {
				alert(greetings.join());
			}
			this.addGreeting = function(greeting) {
				greetings.push(greeting);
			}
		}
	};
})

.directive('finish', function() {
	return {
		restrict: 'A',
		require: 'greeting',
		priority:-1,
		terminal: true,
		link: function(scope, element, attrs, controller) {
			controller.addGreeting('heii');
		}
	}
})

.directive('hindi', function() {
	return {
		restrict: 'A',
		require: 'greeting',
		priority: -2,
		link: function(scope, element, attrs, controller) {
			controller.addGreeting('namaste');
		}
	}
});

