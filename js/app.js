angular = require("angular");
require("angular-ui-router");
require("angular-ui-bootstrap");
require("angular-moment");
require("../dist/templateCachePartials");

angular.module("userAdmin", ["userAdminPartials", "ui.router", "ui.bootstrap", "angularMoment"])
	.config(function ($stateProvider, $urlRouterProvider) {
		"use strict";

		//setup otherwise
		$urlRouterProvider.otherwise("/user-list"); 
		
		//setup routes
		$stateProvider
			.state("user-list", {
	            url: "/user-list",
	            templateUrl: "/partials/user-list.html",	            
	            controller: "userListCtrl",
	            controllerAs: "userListCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}]
				}          
	        })		
	        .state("user-add", {
	            url: "/user-add",
	            templateUrl: "/partials/user-add.html",	            
	            controller: "userAddCtrl",
	            controllerAs: "userAddCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}] 
				}      
	        })	
	        .state("user-edit", {
	            url: "/user-edit/:user",
	            templateUrl: "/partials/user-edit.html",	            
	            controller: "userEditCtrl",
	            controllerAs: "userEditCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}] 
				}      
	        })	
	        .state("user-balance", {
	            url: "/user-balance/:user",
	            templateUrl: "/partials/user-balance.html",	            
	            controller: "userBalanceCtrl",
	            controllerAs: "userBalanceCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}] 
				}      
	        })	
	        .state("user-detail", {
	            url: "/user-detail/:user",
	            templateUrl: "/partials/user-detail.html",	            
	            controller: "userDetailCtrl",
	            controllerAs: "userDetailCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}] 
				}                
	        })
	        .state("transactions-list", {
	            url: "/transactions-list/:user",
	            templateUrl: "/partials/transactions-list.html",	            
	            controller: "transactionsListCtrl",
	            controllerAs: "transactionsListCtrl",
	            resolve: {
					userData: ["userData", function (userData) {
						return userData;
					}] 
				}                
	        })
	});

require("userListCtrl");
require("userDetailCtrl");
require("userAddCtrl");
require("userEditCtrl");
require("userBalanceCtrl");
require("transactionsListCtrl");
require("userData");