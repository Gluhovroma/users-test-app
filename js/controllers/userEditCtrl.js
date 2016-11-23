angular = require("angular");

angular.module("userAdmin")
	.controller("userEditCtrl", function userEditCtrl($scope, userData, $state) {
		"use strict";
	    
	    var userEditCtrl = this;
	    
	    userEditCtrl.user = {};
	    userEditCtrl.error = null;
	    userEditCtrl.user_id = $state.params.user;
		userData.getOne(userEditCtrl.user_id)
			.then(function(result) {
				userEditCtrl.user = result;
			},
			function(error) {
				userEditCtrl.error = error;
			})

	    userEditCtrl.save = function(form) {	    
	    	if (form.$valid) { 	    	    	
  				userData.editUser(userEditCtrl.user)
  					.then(function(result) {  						
  						userEditCtrl.error = null;						
  						$state.go("user-list");
  					},
  					function(error) {
  						userEditCtrl.error = error;
  					})
	    	}          
	    }	 
	});