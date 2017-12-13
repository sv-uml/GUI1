(function() {
	'use strict';

	var app = angular.module('ats.controllers.main', ['ui.router', 'angularMoment']);
	
	app.config([
	'$stateProvider', 
	function($stateProvider) {

		$stateProvider.state('home', {
			parent: "root",
			url: "/home", 
			views: {
				"container@": {
					templateUrl: 'partials/home.html', 
					controller: 'MainCtrl',
				}
			}
		});
	}]);
	app.controller('MainCtrl', [
	'$scope',
	function($scope) {
	}])

})();