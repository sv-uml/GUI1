(function() {
  "use strict";
var app = angular.module('ats', [
	'ats.controllers.nav', 
	'ats.controllers.main',
	'ats.controllers.job', 
	'ats.controllers.ats', 
	'ats.services.job', 
	'ats.services.ats', 
	'ui.router']);

app.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('root', {
			abstract: true, 
			views: {
				'header': {
					templateUrl: 'partials/header.html',
					controller: 'NavCtrl'
				}
			}
		});
		
		$urlRouterProvider.otherwise('home');
	}]);
})();