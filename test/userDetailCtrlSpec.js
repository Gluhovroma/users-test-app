(function () {
	'use strict';

	describe('userDetail Controller', function () {
		
		var ctrl, scope, userData, deferredGetOne, state;

		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q) {
			scope = $rootScope.$new();			
			userData = userData;	
			deferredGetOne = $q.defer();
			spyOn(userData, 'getOne').and.returnValue(deferredGetOne.promise);				
			ctrl = $controller('userDetailCtrl as userDetailCtrl', {
				$scope: scope,
				userData: userData
			});				
		}));

		it('initialize user on start', function () {			
			expect(ctrl.user).toEqual({});			
		});

		it('should resolve promise on get user', function () {		    
		    deferredGetOne.resolve({
			    "user_id": "111",
			    "user_name": "\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0447\u0435\u043b",
			    "user_custom": "111",
			    "email": "mail@mail.com",
			    "register_date": "2016-03-22T06:20:28+00:00",
			    "balance": 100,
			    "wallet_amount": 0,
			    "wallet_currency": "USD",
			    "enabled": true
			});		
		    scope.$apply();		    
		    expect(ctrl.user).not.toEqual({});		    
		});

		it('should reject promise on get user', function () {		    
		    deferredGetOne.reject("Error");
		    scope.$apply();		 
		    expect(ctrl.user).toEqual({});
		    expect(ctrl.error).not.toBeNull();	
		});
	});
}());
