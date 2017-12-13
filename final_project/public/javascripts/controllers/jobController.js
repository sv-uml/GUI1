(function() {
	'use strict';

	var app = angular.module('ats.controllers.job', ['ui.router', 'angularMoment']);
	
	app.config([
	'$stateProvider', 
	function($stateProvider) {
		$stateProvider.state('jobs', {
			parent: "root",
			url: '/jobs', 
			views: {
				"container@": {
					templateUrl: 'partials/jobs.html', 
					controller: 'JobCtrl',
				}
			},
			resolve: {
				getListingPromise: ['jobService', function(jobService) {
					return jobService.getJobs();
				}]
			}
		}).state('job', {
			parent: "root",
			url: '/job/:id', 
			views: {
				"container@": {
					templateUrl: 'partials/jobItem.html', 
					controller: 'JobCtrl',
				}
			},
			resolve: {
				getListingPromise: ['jobService', '$stateParams', function(jobService, $stateParams) {
					return jobService.getJob($stateParams.id);
				}]
			}
		}).state('apply', {
			parent: "root",
			url: '/apply/:id', 
			views: {
				"container@": {
					templateUrl: 'partials/apply.html', 
					controller: 'JobCtrl',
				}
			},
			resolve: {
				getListingPromise: ['jobService', '$stateParams', function(jobService, $stateParams) {
					return jobService.getJob($stateParams.id);
				}]
			}
		});
	}]);
	app.controller('JobCtrl', [
	'$scope', 
	'jobService',
	function($scope, jobService) {
		$scope.jobs = jobService.jobs;
		$scope.job = jobService.job;
		$scope.activePersonal = true;
		$scope.activeExperience = false;
		$scope.activeReview = false;
		$scope.appSubmitted = false;

		$scope.name = "";
		$scope.email = "";
		$scope.address = "";
		$scope.birthdate = "";
		$scope.phone = "";
		$scope.university = "";
		$scope.degree = "";
		$scope.company = "";
		$scope.position = "";
		$scope.skills = "";

		$scope.processPersonal = function() {
			if ($scope.name === "" || $scope.email === "" || $scope.address === "" || $scope.birthdate === "" || $scope.phone === "") {
				alert("Please fill all of the fields.");
			} else {
				$scope.activePersonal = false;
				$scope.activeExperience = true;
			}
		}

		$scope.processExperience = function() {
			if ($scope.university === "" || $scope.degree === "" || $scope.company === "" || $scope.position === "" || $scope.skills === "") {
				alert("Please fill all of the fields.");
			} else {
				$scope.activeExperience = false;
				$scope.activeReview = true;
			}
		}

		$scope.returnToPersonal = function() {
			$scope.activePersonal = true;
			$scope.activeExperience = false;
		}

		$scope.returnToExperience = function() {
			$scope.activeExperience = true;
			$scope.activeReview = false;
		}

		$scope.processReview = function() {
			$scope.activeReview = false;
			// Submit application
			var application = {
				job: $scope.job.id,
				name: $scope.name,
				email: $scope.email,
				address: $scope.address,
				birthdate: $scope.birthdate,
				phone: $scope.phone,
				university: $scope.university,
				degree: $scope.degree,
				company: $scope.company,
				position: $scope.position,
				skills: $scope.skills
			};

			jobService.sendApplication(application).then(function() {
				if (jobService.appSuccess) {
					$scope.appSubmitted = true;
				}
			});;
		}
	}]);
})();