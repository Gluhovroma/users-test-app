angular = require("angular");

angular.module("userAdmin")
	.controller("userBalanceCtrl", function userBalanceCtrl($scope, userData, $state) {
		"use strict";
	    
	    var userBalanceCtrl = this;
	    	  
	    userBalanceCtrl.balance = {
	    	amount: "",
	    	comment: ""
	    };
	    userBalanceCtrl.error = null;
	    userBalanceCtrl.user_id = $state.params.user;
		
	    userBalanceCtrl.save = function(form) {	    	
	    	if (form.$valid) {     	    		
  				userData.changeBalance(userBalanceCtrl.user_id, userBalanceCtrl.balance)
  					.then(function(result) {  	
  						userBalanceCtrl.error = null;					
  						$state.go("user-list");
  					},
  					function(error) {
  						userBalanceCtrl.error = error;
  					})
	    	}	  	          
	    };  
		
	});