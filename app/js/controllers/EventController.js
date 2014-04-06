'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);
        console.log($route.current.params.foo);
        //$scope.event = $route.current.locals.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);