(function() {
	"use strict";
    var app = angular.module('ats.services.ats', []);

    app.factory('atsService', ['$http', 
    	function($http) {
		var o = {
            jobs: []
		};
		o.createJob = function(job) {
			return $http.post("engine/createJob.php", job).success(function(data) {
				o.appSuccess = data;
			});
        }
        o.getApplicationForJob = function(id) {
			return $http.get("engine/getAppForJob.php?id=" + id).success(function(data){
                o.app = data;
			});
		};
		return o;
	}]);
})();
