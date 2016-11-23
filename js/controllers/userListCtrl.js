angular = require('angular');

angular.module('userAdmin')
	.controller('userListCtrl', function userListCtrl($scope, userData) {
		'use strict';

		var userListCtrl = this;
		
		userListCtrl.offset = 0;
		userListCtrl.users = [];
		userListCtrl.showLoadButton = false;
        userListCtrl.error = null;

		userListCtrl.load = function() {        
            userData.getData(userListCtrl.offset)
                .then(function(result) {                	
                    userListCtrl.users = userListCtrl.users.concat(result.data);  
                    userListCtrl.users.length == result.recordsTotal ? userListCtrl.showLoadButton = false : userListCtrl.showLoadButton = true;
                    userListCtrl.offset++;   
                    userListCtrl.error = null;
                },
                function(error) {                	
                    userListCtrl.error = error;                                  
                })        
    	};
        
    	userListCtrl.load();
	});
