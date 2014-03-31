eventsApp.factory('eventData', function ($http, $q) {
	return {
		getEvent: function() {
			var deffered = $q.defer();

			$http({method:'GET', url:'/data/event/1'}).
				success(function(data, status, headers, config) {
					deffered.resolve(data);
				}).
				error(function(data, status, headers, config) {
					deffered.reject(status);
				});
			return deffered.promise;
		}
	}
});