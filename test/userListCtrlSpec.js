(function () {
	'use strict';

	describe('userList Controller', function () {
		var ctrl, scope, userData, deferred;

		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q) {
			scope = $rootScope.$new();			
			userData = userData;			
			deferred = $q.defer();
			spyOn(userData, 'getData').and.returnValue(deferred.promise);
			ctrl = $controller('userListCtrl as userListCtrl', {
				$scope: scope,
				userData: userData
			});
		}));

		it('offset should be 0 on start', function () {
			expect(ctrl.offset).toBe(0);
		});

		it('users array should be empty at the start', function () {
			expect(ctrl.users.length).toBe(0);
		});
		it('load button show be not shown on start', function () {
			expect(ctrl.showLoadButton).toBeFalsy();
		});
		it('load button show be not shown on start', function () {
			expect(ctrl.error).toBeNull();
		});
		it('should resolve promise, offset should increase, load button should be visible', function () {
		    deferred.resolve({
			    "recordsTotal": 2,
			    "data": [
			        {
			            "user_id": "0",
			            "user_name": "1234",
			            "user_custom": "cust3",
			            "email": "123@mail.ru",
			            "register_date": "2016-06-29T20:06:51+00:00",
			            "balance": -12311763,
			            "wallet_amount": 0,
			            "wallet_currency": "USD",
			            "enabled": false
			        }			        
			    ]
			});
		    scope.$apply();
		    expect(ctrl.users.length).not.toBe(0);
		    expect(ctrl.showLoadButton).toBeTruthy();
		    expect(ctrl.offset).toBe(1);
		    expect(ctrl.error).toBeNull();
		});
		it('should resolve promise, offset should increase, load button should be invisible', function () {
		    deferred.resolve({
			    "recordsTotal": 1,
			    "data": [
			        {
			            "user_id": "0",
			            "user_name": "1234",
			            "user_custom": "cust3",
			            "email": "123@mail.ru",
			            "register_date": "2016-06-29T20:06:51+00:00",
			            "balance": -12311763,
			            "wallet_amount": 0,
			            "wallet_currency": "USD",
			            "enabled": false
			        }			        
			    ]
			});		
		    scope.$apply();		   
		    expect(ctrl.users.length).not.toBe(0);
		    expect(ctrl.showLoadButton).toBeFalsy();
		    expect(ctrl.offset).toBe(1);
		    expect(ctrl.error).toBeNull();
		});

		it('should reject promise, offset should be 0, load button should be invisible, users array should be empty', function () {
		    deferred.reject("Ошибка");	
		    scope.$apply();	
		    expect(ctrl.users.length).toBe(0);
		    expect(ctrl.showLoadButton).toBeFalsy();
		    expect(ctrl.offset).toBe(0);
		    expect(ctrl.error).not.toBeNull();
		});

	});
}());
