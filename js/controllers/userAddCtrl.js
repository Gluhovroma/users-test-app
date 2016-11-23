angular = require("angular");

angular.module("userAdmin")
	.controller("userAddCtrl", function userAddCtrl($scope, userData, $state) {
		"use strict";
	    
	    var userAddCtrl = this;
	    
	    userAddCtrl.user = {
	    	"user_id": (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase(),
	    	"user_name": "",
	    	"user_custom": "",
	    	"email": ""
	    };   
	    userAddCtrl.error = null;
	    
	    userAddCtrl.save = function(form) {
	    
	    	if (form.$valid) { 	    		
  				userData.addUser(userAddCtrl.user)
  					.then(function(result) {  		
  						userAddCtrl.error = null;				
  						$state.go("user-list");
  					},
  					function(error) {
  						userAddCtrl.error = error;
  					})					
	    	}      
	    }

	    function S4() {
    		return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
		}
		
	});