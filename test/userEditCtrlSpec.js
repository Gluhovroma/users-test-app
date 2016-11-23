(function () {
	'use strict';

	describe('userList Controller', function () {
		var ctrl, scope, userData, deferredGetOne, form, state, deferredEditUser;

		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q, $templateCache, $compile) {
			scope = $rootScope.$new();			
			userData = userData;			
			deferredEditUser = $q.defer();
			deferredGetOne = $q.defer();
			spyOn(userData, 'getOne').and.returnValue(deferredGetOne.promise);
			spyOn(userData, 'editUser').and.returnValue(deferredEditUser.promise);			
			ctrl = $controller('userEditCtrl as userEditCtrl', {
				$scope: scope,
				userData: userData
			});			
			var templateHtml = $templateCache.get('/partials/user-edit.html');
			var formElem = angular.element("<div>" + templateHtml + "</div>");
		    $compile(formElem)(scope);
			
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
		    expect(ctrl.user).not.toEqual({});;
		    
		});

		it('should reject promise on get user', function () {		    
		    deferredGetOne.reject("Error");		    
		    scope.$apply();		 
		    expect(ctrl.user).toEqual({});
		    expect(ctrl.error).not.toBeNull();	
		});
		
		it('should resolve promise on get user', function () {
		   deferredEditUser.resolve();
		    scope.$apply();	
		    expect(ctrl.error).toBeNull();	   		    
		});		
		it('should not allow empty fields in form', function () {
			scope.$apply()
		    form = scope.form;		    
		    expect(form.$valid).toBeFalsy();
		});
		it('should not allow empty email field in form', function () {
			ctrl.user.user_name = 'test';
			scope.$apply()
		    form = scope.form;		   
		    expect(form.$valid).toBeFalsy();
		});
		it('should not allow invalid email field in form', function () {
			ctrl.user.user_name = 'test';
			ctrl.user.email = 'test';
			scope.$apply()
		    form = scope.form;		    
		    expect(form.$valid).toBeFalsy();
		    expect(form.uEmail.$error.email).toBeTruthy();
		});
		it('form should be valid', function () {
			ctrl.user.user_name = 'test';
			ctrl.user.email = 'test@test.ru';
			scope.$apply()
		    form = scope.form;		    
		    expect(form.$valid).toBeTruthy();		   
		});		
	});
}());
