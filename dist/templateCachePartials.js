(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/transactions-list.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="#/users">Users</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a ui-sref="user-detail({\'user\': transactionsListCtrl.user_id})">User detail</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="">Transactions</a>\n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="portlet light portlet-fit bordered">\n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">\n' +
    '                        <i class="icon-settings font-red"></i>\n' +
    '                        <span class="caption-subject font-red sbold uppercase">List of transactions</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">\n' +
    '                    <div class="table-toolbar">\n' +
    '                        <div class="row">\n' +
    '                            <div class="col-md-4">\n' +
    '                                <h4>Date from</h4>\n' +
    '                                <p class="input-group">\n' +
    '                                    <input type="text" show-button-bar="false" class="form-control" uib-datepicker-popup ng-model="transactionsListCtrl.datetime_from" is-open="transactionsListCtrl.fromDateCalendarOpened" close-text="Close" />\n' +
    '                                    <span class="input-group-btn">\n' +
    '                                        <button type="button" class="btn btn-default" ng-click="transactionsListCtrl.chooseFromDate()">\n' +
    '                                            <i class="fa fa-calendar"></i>\n' +
    '                                        </button>\n' +
    '                                    </span>\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                            <div class="col-md-4">\n' +
    '                                <h4>Date to</h4>\n' +
    '                                <p class="input-group">\n' +
    '                                    <input type="text" class="form-control" show-button-bar="false" uib-datepicker-popup ng-model="transactionsListCtrl.datetime_to" is-open="transactionsListCtrl.toDateCalendarOpened" datepicker-options="dateOptions" ng-required="true" close-text="Close" />\n' +
    '                                    <span class="input-group-btn">\n' +
    '                                        <button type="button" class="btn btn-default" ng-click="transactionsListCtrl.chooseToDate()">\n' +
    '                                            <i class="fa fa-calendar"></i>\n' +
    '                                        </button>\n' +
    '                                    </span>\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                            <div class="col-md-4">\n' +
    '                                <h4>Filter</h4>\n' +
    '                                <p class="input-group">\n' +
    '                                    <select class="form-control" name="singleSelect" ng-change="transactionsListCtrl.load()" ng-model="transactionsListCtrl.transaction_type">\n' +
    '                                        <option value="payment">Payment</option>\n' +
    '                                        <option value="coupon">Coupon</option>\n' +
    '                                        <option value="inGamePurchase">InGamePurchase</option>\n' +
    '                                        <option value="internal">Internal</option>\n' +
    '                                        <option value="cancellation">Cancellation</option>\n' +
    '                                    </select>\n' +
    '                                </p>\n' +
    '                            </div>\n' +
    '                        </div>                                      \n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <table class="table table-striped table-hover table-bordered" id="sample_editable_1">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th> User id </th>\n' +
    '                            <th> Operation id </th>\n' +
    '                            <th> Date </th>\n' +
    '                            <th> Balance </th>\n' +
    '                            <th> Transaction id </th>\n' +
    '                            <th> Transaction type </th>                                               \n' +
    '                            <th> Status </th>\n' +
    '                            <th> Amount </th>\n' +
    '                            <th> Coupon code </th>                                         \n' +
    '                            <th> Sum </th>\n' +
    '                            <th> Currency </th>                                                \n' +
    '                            <th> Comment </th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="item in transactionsListCtrl.transactions">\n' +
    '                            <td ng-bind="::item.user_id"></td>\n' +
    '                            <td ng-bind="::item.operation_id"></td>                                                \n' +
    '                            <td ng-bind="::item.date | date : \'dd.MM.yyyy\' "></td>\n' +
    '                            <td ng-bind="::item.user_balance"></td>\n' +
    '                            <td ng-bind="::item.transaction_id"></td>\n' +
    '                            <td ng-bind="::item.transaction_type"></td>\n' +
    '                            <td ng-bind="::item.status"></td>     \n' +
    '                            <td ng-bind="::item.amount"></td>   \n' +
    '                            <td ng-bind="::item.coupon_code"></td>    \n' +
    '                            <td ng-bind="::item.sum"></td>   \n' +
    '                            <td ng-bind="::item.currency"></td>   \n' +
    '                            <td ng-bind="::item.comment"></td>                                      \n' +
    '                        </tr>                                   \n' +
    '                    </tbody>\n' +
    '                </table>                \n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '               ');
}]);
})();

(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/user-add.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="#/user-list">Users</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a href="">Add user</a>                \n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">        \n' +
    '            <div class="portlet light portlet-fit bordered">\n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">\n' +
    '                        <i class="icon-settings font-red"></i>\n' +
    '                        <span class="caption-subject font-red sbold uppercase">Add user</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">\n' +
    '                    <form id="form_sample_1" name="form" class="form-horizontal" novalidate>\n' +
    '                        <div class="form-body">                                                                \n' +
    '                            <div class="form-group" ng-class="{\'has-error\': (form.$submitted || form.uName.$touched) && form.uName.$error.required}">\n' +
    '                                <label class="control-label col-md-3">User name\n' +
    '                                    <span class="required"> * </span>\n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input type="text" required="" data-ng-model="userAddCtrl.user.user_name" name="uName" class="form-control" /> \n' +
    '                                    <div ng-show="form.$submitted || form.uName.$touched"> \n' +
    '                                        <span class="help-block" ng-show="form.uName.$error.required"> User name required </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group" ng-class="{\'has-error\': (form.$submitted || form.uEmail.$touched) && (form.uEmail.$error.required || form.uEmail.$error.email)}">\n' +
    '                                <label class="control-label col-md-3">Email\n' +
    '                                    <span class="required"> * </span>\n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uEmail" required="" data-ng-model="userAddCtrl.user.email" type="email" class="form-control" />\n' +
    '                                    <div ng-show="form.$submitted || form.uEmail.$touched"> \n' +
    '                                        <span class="help-block" ng-show="form.uEmail.$error.required"> Email required </span>\n' +
    '                                        <span class="help-block" ng-show="form.uEmail.$error.email"> Email is not valid </span>\n' +
    '                                    </div> \n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3">User custom id\n' +
    '                                    \n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uCustomId" data-ng-model="userAddCtrl.user.user_custom" type="text" class="form-control" />                                 \n' +
    '                                </div>\n' +
    '                            </div>   \n' +
    '                            <div class="form-actions">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="col-md-offset-3 col-md-9">\n' +
    '                                        <input type="submit" value="Save" class="btn green" ng-click="userAddCtrl.save(form)"/>\n' +
    '                                        <a href="#/user-list" type="button" class="btn grey-salsa btn-outline">Cancel</a>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>               \n' +
    '                </div>\n' +
    '            </div>       \n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>            ');
}]);
})();

(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/user-balance.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="#/user-list">Users</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a ui-sref="user-detail({\'user\': userBalanceCtrl.user_id})">User detail</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a href="">Change balance</a>               \n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">       \n' +
    '            <div class="portlet light portlet-fit bordered">\n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">\n' +
    '                        <i class="icon-settings font-red"></i>\n' +
    '                        <span class="caption-subject font-red sbold uppercase">Edit user</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">               \n' +
    '                    <form id="form_sample_1" name="form" class="form-horizontal" novalidate>\n' +
    '                        <div class="form-body">                                                                    \n' +
    '                            <div class="form-group" ng-class="{\'has-error\': (form.$submitted || form.uAmount.$touched) && form.uAmount.$error.required}">\n' +
    '                                <label class="control-label col-md-3">Amount\n' +
    '                                    <span class="required"> * </span>\n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input type="number" required="" data-ng-model="userBalanceCtrl.balance.amount" name="uAmount" class="form-control" /> \n' +
    '                                    <div ng-show="form.$submitted || form.uAmount.$touched"> \n' +
    '                                        <span class="help-block" ng-show="form.uAmount.$error.required"> Amount required </span>\n' +
    '                                    </div>\n' +
    '                                 \n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3">Comment</label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uComment" data-ng-model="userBalanceCtrl.balance.comment" type="text" class="form-control" />     \n' +
    '                                </div>\n' +
    '                            </div>                          \n' +
    '                            <div class="form-actions">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="col-md-offset-3 col-md-9">\n' +
    '                                        <input type="submit" value="Save" class="btn green" ng-click="userBalanceCtrl.save(form)"/>\n' +
    '                                        <a href="#/user-list" type="button" class="btn grey-salsa btn-outline">Cancel</a>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>            \n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>               ');
}]);
})();

(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/user-detail.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="#/user-list">Users</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a href="">User detail</a>            \n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">     \n' +
    '            <div class="portlet light portlet-fit bordered"> \n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">\n' +
    '                        <i class="icon-settings font-red"></i>\n' +
    '                        <span class="caption-subject font-red sbold uppercase">User detail</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">              \n' +
    '                    <div class="row">\n' +
    '    				    <div class="col-md-6">\n' +
    '                            <form id="form_sample_1" name="form" class="form-horizontal" novalidate>\n' +
    '                                <div class="form-body">\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">User id\n' +
    '                                            <span class="required"> * </span>\n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input type="text" disabled data-ng-model="userDetailCtrl.user.user_id" name="uName" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div>                                     \n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">User name\n' +
    '                                            <span class="required"> * </span>\n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input type="text" disabled data-ng-model="userDetailCtrl.user.user_name" name="uName" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">Email                            \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uEmail" disabled  data-ng-model="userDetailCtrl.user.email" type="email" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">User custom id                                \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled data-ng-model="userDetailCtrl.user.user_custom" type="text" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">Register date                                \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled data-ng-model="userDetailCtrl.user.register_date" type="text" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">Balance                                \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled data-ng-model="userDetailCtrl.user.balance" type="text" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                     <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">Wallet amount                                \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled data-ng-model="userDetailCtrl.user.wallet_amount" type="text" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">Wallet currency                               \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled data-ng-model="userDetailCtrl.user.wallet_currency" type="text" class="form-control" />                                 \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="control-label col-md-3">User enabled                               \n' +
    '                                        </label>\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <input name="uCustomId" disabled ng-if="userDetailCtrl.user.enabled" value="yes" type="text" class="form-control" /> \n' +
    '                                            <input name="uCustomId" disabled ng-if="!userDetailCtrl.user.enabled" value="no" type="text" class="form-control" />                                  \n' +
    '                                        </div>\n' +
    '                                    </div> \n' +
    '                                    <div class="form-actions">\n' +
    '                                        <div class="row">\n' +
    '                                            <div class="col-md-offset-3 col-md-9">\n' +
    '                                                <a href="#/user-list" type="button" class="btn grey-salsa btn-outline">OK</a>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </form>\n' +
    '                        </div>\n' +
    '                        <div class="col-md-6">\n' +
    '                        	<div class="row" style="margin-bottom: 10px;">\n' +
    '                        		<a ui-sref="user-edit({\'user\':userDetailCtrl.user.user_id})" type="button" class="col-md-6 btn grey-mint btn-outline sbold uppercase">Edit user</a>             \n' +
    '                        	</div>\n' +
    '                        	<div class="row" style="margin-bottom: 10px;">\n' +
    '                        		<a ui-sref="user-balance({\'user\':userDetailCtrl.user.user_id})"  type="button" class="col-md-6 btn grey-mint btn-outline sbold uppercase">Change balance</a>                	\n' +
    '                        	</div>\n' +
    '                        	<div class="row" style="margin-bottom: 10px;">\n' +
    '                        		<a ui-sref="transactions-list({\'user\':userDetailCtrl.user.user_id})" type="button" class="col-md-6 btn grey-mint btn-outline sbold uppercase">List of operations</a>\n' +
    '                        	</div>\n' +
    '                        </div>   \n' +
    '                    </div>           \n' +
    '                </div>\n' +
    '            </div>     \n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>          ');
}]);
})();

(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/user-edit.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="#/user-list">Users</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a ui-sref="user-detail({\'user\': userEditCtrl.user_id})">User detail</a>\n' +
    '                <i class="fa fa-circle"></i>\n' +
    '            </li> \n' +
    '            <li>\n' +
    '                <a href="">Edit user</a>\n' +
    '               \n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">      \n' +
    '            <div class="portlet light portlet-fit bordered">\n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">                       \n' +
    '                        <span class="caption-subject font-red sbold uppercase">Edit user</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">             \n' +
    '                    <form id="form_sample_1" name="form" class="form-horizontal" novalidate>\n' +
    '                        <div class="form-body">                                                                \n' +
    '                            <div class="form-group" ng-class="{\'has-error\': (form.$submitted || form.uName.$touched) && form.uName.$error.required}">\n' +
    '                                <label class="control-label col-md-3">User name\n' +
    '                                    <span class="required"> * </span>\n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input type="text" required="" data-ng-model="userEditCtrl.user.user_name" name="uName" class="form-control" /> \n' +
    '                                    <div ng-show="form.$submitted || form.uName.$touched"> \n' +
    '                                        <span class="help-block" ng-show="form.uName.$error.required"> User name required </span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group" ng-class="{\'has-error\': (form.$submitted || form.uEmail.$touched) && (form.uEmail.$error.required || form.uEmail.$error.email)}">\n' +
    '                                <label class="control-label col-md-3">Email\n' +
    '                                    <span class="required"> * </span>\n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uEmail" required="" data-ng-model="userEditCtrl.user.email" type="email" class="form-control" />\n' +
    '                                    <div ng-show="form.$submitted || form.uEmail.$touched"> \n' +
    '                                        <span class="help-block" ng-show="form.uEmail.$error.required"> Email required </span>\n' +
    '                                        <span class="help-block" ng-show="form.uEmail.$error.email"> Email is not valid </span>\n' +
    '                                    </div> \n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3">User custom id\n' +
    '                                    \n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uCustomId" data-ng-model="userEditCtrl.user.user_custom" type="text" class="form-control" />                                 \n' +
    '                                </div>\n' +
    '                            </div>   \n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3">Enabled\n' +
    '                                    \n' +
    '                                </label>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <input name="uEnabled" data-ng-model="userEditCtrl.user.enabled" type="checkbox" />                  \n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                            <div class="form-actions">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="col-md-offset-3 col-md-9">\n' +
    '                                        <input type="submit" value="Save" class="btn green" ng-click="userEditCtrl.save(form)"/>\n' +
    '                                        <a href="#/user-list" type="button" class="btn grey-salsa btn-outline">Cancel</a>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>           \n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>               ');
}]);
})();

(function(module) {
try {
  module = angular.module('userAdminPartials');
} catch (e) {
  module = angular.module('userAdminPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/user-list.html',
    '<div class="page-content">\n' +
    '    <div class="page-bar">\n' +
    '        <ul class="page-breadcrumb">\n' +
    '            <li>\n' +
    '                <a href="index.html">Users</a>                                \n' +
    '            </li>                            \n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="portlet light portlet-fit bordered">\n' +
    '                <div class="portlet-title">\n' +
    '                    <div class="caption">\n' +
    '                        <i class="icon-settings font-red"></i>\n' +
    '                        <span class="caption-subject font-red sbold uppercase">List of users</span>\n' +
    '                    </div>                                    \n' +
    '                </div>\n' +
    '                <div class="portlet-body">\n' +
    '                    <div class="table-toolbar">\n' +
    '                        <div class="row">\n' +
    '                            <div class="col-md-6">\n' +
    '                                <div class="btn-group">\n' +
    '                                    <a ui-sref="user-add" id="sample_editable_1_new" class="btn green"> Add\n' +
    '                                        <i class="fa fa-plus"></i>\n' +
    '                                    </a>\n' +
    '                                </div>\n' +
    '                            </div>                                      \n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <table class="table table-striped table-hover table-bordered" id="sample_editable_1">\n' +
    '                        <thead>\n' +
    '                            <tr>\n' +
    '                                <th> User name </th>\n' +
    '                                <th> Register date </th>\n' +
    '                                <th> Email </th>\n' +
    '                                <th> Wallet amount </th>\n' +
    '                                <th> Currency </th>\n' +
    '                                <th> Action </th>\n' +
    '                            </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                            <tr ng-repeat="item in userListCtrl.users">\n' +
    '                                <td ng-bind="::item.user_name"></td>\n' +
    '                                <td ng-bind="::item.register_date | date : \'dd.MM.yyyy\' "></td>\n' +
    '                                <td ng-bind="::item.email"></td>\n' +
    '                                <td ng-bind="::item.wallet_amount"></td>\n' +
    '                                <td ng-bind="::item.wallet_currency"></td>\n' +
    '                                <td>\n' +
    '                                    <a class="edit" ui-sref="user-detail({\'user\': item.user_id})"> Detail </a>\n' +
    '                                </td>                                                \n' +
    '                            </tr>                                   \n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                    <div class="row">\n' +
    '                        <center>\n' +
    '                            <button ng-show="userListCtrl.showLoadButton" ng-click="userListCtrl.load()" class="btn">Load...</button>\n' +
    '                        </center>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
