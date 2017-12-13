(function() {
	"use strict";
    var app = angular.module('ats.services.job', []);

    app.factory('jobService', ['$http', 
    	function($http) {
		var o = {
            jobs: []
		};
		o.getJobs = function() {
			return $http.get('engine/getJobs.php').success(function(data){
	   			angular.copy(data, o.jobs);
			});
        };
        o.getJob = function(id) {
			return $http.get("engine/getJob.php?id=" + id).success(function(data){
                o.job = data[0];
			});
		};
		o.sendApplication = function(app) {
			return $http.post("engine/sendApp.php", app).success(function(data) {
				o.appSuccess = data;
			});
		}
		return o;
	}]);
})();
