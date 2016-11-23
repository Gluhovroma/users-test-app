
(function () {
	'use strict';

	describe('userAdd Controller', function () {
		var ctrl, scope, userData, deferred, form, state;
		
		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q, $templateCache, $compile, $state) {
			scope = $rootScope.$new();			
			userData = userData;				
			deferred = $q.defer();
			spyOn(userData, 'addUser').and.returnValue(deferred.promise);
			ctrl = $controller('userAddCtrl as userAddCtrl', {
				$scope: scope,
				userData: userData
			});
			state = $state;
			state.go("user-add");			
			var templateHtml = $templateCache.get('/partials/user-add.html');
			var formElem = angular.element("<div>" + templateHtml + "</div>");
		    $compile(formElem)(scope);
		    scope.$apply();	
		}));

		it('initialize user on start', function () {

			expect(ctrl.user).not.toBe(undefined);
			expect(ctrl.user.user_name).toBe("");
			expect(ctrl.user.user_custom).toBe("");
			expect(ctrl.user.email).toBe("");
		});
		it('error should be null on start', function () {
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
		it('should resolve promise on add user', function () {	    
		    deferred.resolve();			 
		    scope.$apply();			  	 
		    expect(ctrl.error).toBeNull();		    
		});
	});
}());
