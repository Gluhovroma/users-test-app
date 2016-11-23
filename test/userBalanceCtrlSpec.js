(function () {
	'use strict';

	describe('userBalance Controller', function () {
		
		var ctrl, scope, userData, deferredChangeBalance, state, form;
	
		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q, $templateCache, $compile) {
			scope = $rootScope.$new();			
			userData = userData;	
			deferredChangeBalance = $q.defer();
			spyOn(userData, 'changeBalance').and.returnValue(deferredChangeBalance.promise);				
			ctrl = $controller('userBalanceCtrl as userBalanceCtrl', {
				$scope: scope,
				userData: userData
			});	
			var templateHtml = $templateCache.get('/partials/user-balance.html');
			var formElem = angular.element("<div>" + templateHtml + "</div>");
		    $compile(formElem)(scope);			
		}));

		it('initialize balance on start', function () {
			
			expect(ctrl.balance).not.toBe(undefined);
			expect(ctrl.balance.amount).toBe("");
			expect(ctrl.balance.comment).toBe("");

		});

		it('should not allow empty fields in form', function () {
			scope.$apply()
		    form = scope.form;		    
		    expect(form.$valid).toBeFalsy();
		});
		
		it('form should be valid', function () {
			ctrl.balance.amount = 123;			
			scope.$apply()
		    form = scope.form;		    
		    expect(form.$valid).toBeTruthy();
		});

		it('should resolve promise on change balance', function () {			    
		    deferredChangeBalance.resolve();		  
		    scope.$apply();			    
		    expect(ctrl.error).toBeNull();		    
		});

		// it('should resolve promise on change balance', function () {
		//     // Setup the data we wish to return for the .then function in the controller
		    
		//     deferredChangeBalance.reject("error");		
		//     // We have to call apply for this to work
		//     scope.$apply();		   
		//     // Since we called apply, not we can perform our assertions		 
		//     expect(ctrl.error).not.toBeNull();
		    
		// });		
	});
}());
