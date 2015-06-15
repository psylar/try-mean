'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				color: 'btn-success',
				total: '20,859',
				description: 'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-calendar',
				color: 'btn-primary',
				total: '8,788',
				description: 'UPCOMING EVENTS'
			},
			{
				icon: 'glyphicon-edit',
				color: 'btn-success',
				total: '685',
				description: 'FOLLOW UPS REQUIRED'
			},
			{
				icon: 'glyphicon-record',
				color: 'btn-info',
				total: '1,854',
				description: 'NEW CUSTOMERS IN 24H'
			},
			{
				icon: 'glyphicon-eye-open',
				color: 'btn-warning',
				total: '1,00,000',
				description: 'EMAILS SENT'
			},
			{
				icon: 'glyphicon-user',
				color: 'btn-danger',
				total: '356',
				description: 'REFFERALS TO MODERATE'
			}
		];
	}
]);
