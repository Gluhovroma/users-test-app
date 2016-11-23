angular = require("angular");

angular.module("userAdmin")
    .service("userData", function($http, $q) {
        
        var userData = {};

        var _getData = function (offset) {           

            var deferred = $q.defer();

            $http.get("https://livedemo.xsolla.com/fe/test-task/baev/users?limit=10&offset=" + offset*10)
            	.then(function (response) {
	            	deferred.resolve(response.data);
            	}, 
            	function(error) {
            	  	deferred.reject(error);
            	})

            return deferred.promise;

        };      

        var _getOne = function(user_id) {
        	
            var deferred = $q.defer();

            $http.get("https://livedemo.xsolla.com/fe/test-task/baev/users/" + user_id)
            	.then(function (response) {
	            	deferred.resolve(response.data);
            	}, 
            	function(error) {
            	  	deferred.reject(error);
            	})

            return deferred.promise;
        }

        var _addUser = function(user) {
        	
        	var deferred = $q.defer();

            $http.post("https://livedemo.xsolla.com/fe/test-task/baev/users", user)
            	.then(function (response) {
	            	deferred.resolve(response.data);
            	}, 
            	function(error) {
            	  	deferred.reject(error);
            	})

            return deferred.promise;
        }

        var _editUser = function(user) {
            
            var deferred = $q.defer();

            $http.put("https://livedemo.xsolla.com/fe/test-task/baev/users/"+ user.user_id, user)
                .then(function (response) {
                    deferred.resolve(response.data);
                }, 
                function(error) {
                    deferred.reject(error);
                })

            return deferred.promise;
        }

        var _changeBalance = function(user_id, balance) {
            
            var deferred = $q.defer();

            $http.post("https://livedemo.xsolla.com/fe/test-task/baev/users/"+ user_id + "/recharge", balance)
                .then(function (response) {
                    deferred.resolve(response.data);
                }, 
                function(error) {
                    deferred.reject(error);
                })

            return deferred.promise;
        }
        var _getTransactions = function(user_id, datetime_from, datetime_to, transaction_type) {
            
            var deferred = $q.defer();

            $http.get("https://livedemo.xsolla.com/fe/test-task/baev/users/" + user_id + "/transactions?datetime_from="+ datetime_from + "&datetime_to="+ datetime_to + "&transaction_type="+transaction_type)
                .then(function (response) {
                    deferred.resolve(response.data);
                }, 
                function(error) {
                    deferred.reject(error);
                })

            return deferred.promise;
        }
        

        userData.getData = _getData;
        userData.addUser = _addUser;
        userData.getOne = _getOne;
        userData.getTransactions = _getTransactions;
        userData.editUser = _editUser;
        userData.changeBalance = _changeBalance;
        
        return userData;
    })