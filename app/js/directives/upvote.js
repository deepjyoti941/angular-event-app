'use strict';

eventsApp.directive('upvote', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			//here '&' means that we are excuting whatever that will be in scope of parent scope or say excuting function on scope on parent scope
			upvote: "&",
			downvote: "&",
			count: "="
		}
	}
})