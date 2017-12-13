(function() {
	'use strict';

	var app = angular.module('ats.controllers.ats', ['ui.router', 'angularMoment']);
	
	app.config([
	'$stateProvider', 
	function($stateProvider) {
		$stateProvider.state('ats', {
			parent: "root",
			url: '/ats', 
			views: {
				"container@": {
					templateUrl: 'partials/ats.html', 
					controller: 'AtsCtrl',
				}
			}
		}).state('create-job', {
			parent: "root",
			url: '/ats/create-job', 
			views: {
				"container@": {
					templateUrl: 'partials/ats/create-job.html', 
					controller: 'AtsCtrl',
				}
			}
		}).state('view-apps', {
			parent: "root",
			url: '/ats/view-apps', 
			views: {
				"container@": {
					templateUrl: 'partials/ats/view-apps.html', 
					controller: 'AtsCtrl',
				}
			},
			resolve: {
				getListingPromise: ['jobService', function(jobService) {
					return jobService.getJobs();
				}]
			}
		});
	}]);
	app.controller('AtsCtrl', [
	'$scope', 
    'atsService',
    'jobService',
	function($scope, atsService, jobService) {

        $scope.jobs = jobService.jobs;
        $scope.emptySelect = true;

		$scope.job_title = "";
		$scope.job_shortsummary = "";
		$scope.job_description = "";
		$scope.job_location = "";
		$scope.job_responsibilities = "";
        $scope.job_qualifications = "";
        $scope.appSubmitted = false;

		$scope.createJob = function() {
            if ($scope.job_title === "" || $scope.job_shortsummary === "" || $scope.job_description === "" || $scope.job_location === "" || $scope.job_responsibilities === "" || $scope.job_qualifications === "") {
				alert("Please fill all of the fields.");
			} else {
                // Submit request
                var job = {
                    title: $scope.job_title,
                    shortsummary: $scope.job_shortsummary,
                    description: $scope.job_description,
                    location: $scope.job_location,
                    responsibilities: $scope.job_responsibilities,
                    qualifications: $scope.job_qualifications
                };

                atsService.createJob(job).then(function() {
                    if (atsService.appSuccess) {
                        $scope.appSubmitted = true;
                    }
                });
            }
        }
        
        $scope.viewAppsForJob = function() {
            if ($scope.jobList === "") {
                $scope.emptySelect = true;
            } else {
                atsService.getApplicationForJob($scope.jobList).then(function() {
                    $scope.applicant = atsService.app;
                    if ($scope.applicant === undefined) {
                        $scope.emptySelect = true;
                    } else {
                        $scope.emptySelect = false;
                    }
                });
            }
        }
	}]);
})();