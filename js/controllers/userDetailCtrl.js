
angular = require("angular");

angular.module("userAdmin")
	.controller("userDetailCtrl", function userDetailCtrl($scope, $state, userData) {
		
		"use strict";		

		var userDetailCtrl = this;
		
		userDetailCtrl.user = {};
		userDetailCtrl.error = null;
		userData.getOne($state.params.user)
			.then(function(result) {
				userDetailCtrl.user = result;
				userDetailCtrl.error = null;
			},
			function(error) {
				userDetailCtrl.error = error;
			})

	});