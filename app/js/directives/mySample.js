'use strict';

eventsApp.directive('mySample', function($compile) {
	//return directive defination object
	return {
		restrict: 'C',
		template: "<input type='text' ng-model='sampleData' />{{sampleData}} <br/>",
		scope: {}
	}
});