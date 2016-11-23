(function () {
	'use strict';

	describe('transactionsList Controller', function () {
		
		var ctrl, scope, userData, deferredGetTransactions, state, form;

		beforeEach(module('userAdmin'));

		beforeEach(inject(function ($controller, $rootScope, userData, $q, $templateCache, $compile) {
			scope = $rootScope.$new();			
			userData = userData;			
			deferredGetTransactions = $q.defer();
			spyOn(userData, 'getTransactions').and.returnValue(deferredGetTransactions.promise);			
			ctrl = $controller('transactionsListCtrl as transactionsListCtrl', {
				$scope: scope,
				userData: userData
			});	
			var templateHtml = $templateCache.get('/partials/user-balance.html');
			var formElem = angular.element("<div>" + templateHtml + "</div>");
		    $compile(formElem)(scope);			
		}));

		it('initialize on start', function () {
			expect(ctrl.transactions.length).toBe(0);
			expect(ctrl.datetime_from).not.toBeNull();
			expect(ctrl.datetime_to).not.toBeNull();
			expect(ctrl.transaction_type).toBe("payment");
		});
		it('error should be null on start', function () {
			expect(ctrl.error).toBeNull();			
		});
		it('should reject promise on get transactions', function () {		   
		    deferredGetTransactions.reject("Ошибка");		    
		    scope.$apply();	
		    expect(ctrl.error).not.toBeNull();		    
		});
		it('should resolve promise on get transactions', function () {	    
		    deferredGetTransactions.resolve([{
		        "operation_id": 40176494,
		        "transaction_id": null,
		        "coupon_id": null,
		        "coupon_code": null,
		        "transaction_type": "internal",
		        "comment": "123",
		        "date": "2016-05-12T16:18:53+03:00",
		        "amount": 10,
		        "user_balance": 10,
		        "sum": null,
		        "currency": null,
		        "user_id": "1",
		        "status": "failed"
		    }]);	   
		    scope.$apply();			   	 
		    expect(ctrl.error).toBeNull();
		    expect(ctrl.transactions.length).toBe(1);
		});		
	});
}());
