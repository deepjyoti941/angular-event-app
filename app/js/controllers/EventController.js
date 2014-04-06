'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);
        console.log($route.current.params.foo);    //params include everything i.e route properties and querystring properties
        //console.log($route.current.pathParams.foo); //pathParams includes only routes properties
        //$scope.event = $route.current.locals.event;


        /*reload the route to original without refreshing the page */
        $scope.reload = function() {
        	$route.reload();
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);