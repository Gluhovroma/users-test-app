
angular = require("angular");

angular.module("userAdmin")
	.controller("transactionsListCtrl", function transactionsListCtrl($scope, userData, $state, moment) {
		"use strict";
		
		var transactionsListCtrl = this;		
		
		transactionsListCtrl.transactions = [];
		transactionsListCtrl.user_id = $state.params.user;
		transactionsListCtrl.datetime_from = moment().add(-3, "year").toDate();
		transactionsListCtrl.datetime_to = moment().toDate();
		transactionsListCtrl.transaction_type= "payment";
		transactionsListCtrl.fromDateCalendarOpened = false;
		transactionsListCtrl.toDateCalendarOpened = false;
		transactionsListCtrl.error = null;
		
		$scope.$watch(function () {
       		return transactionsListCtrl.datetime_from;
		}, function(value){
			transactionsListCtrl.load();
		});

		$scope.$watch(function () {
       		return transactionsListCtrl.datetime_to;
		}, function(value){
			transactionsListCtrl.load();
		});
		
		transactionsListCtrl.load = function() {       		
        	
			var datetime_from = moment.utc(transactionsListCtrl.datetime_from).format();
			var datetime_to = moment.utc(transactionsListCtrl.datetime_to).format();	

        	userData.getTransactions(transactionsListCtrl.user_id, datetime_from, datetime_to, transactionsListCtrl.transaction_type)
	            .then(function(result) {	       
	            	transactionsListCtrl.error = null;     	
	            	transactionsListCtrl.transactions = result;
	            },
	            function(error) {
	            	transactionsListCtrl.error = error;	                               
	            })
        
    	};
    	transactionsListCtrl.chooseFromDate = function() {
    		transactionsListCtrl.fromDateCalendarOpened = true;
    	};
    	transactionsListCtrl.chooseToDate = function() {
    		transactionsListCtrl.toDateCalendarOpened = true;
    	};
    	
    	transactionsListCtrl.load();
	});