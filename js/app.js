var app = angular.module('demobasics', ['ngRoute', 'ngProgress', 'ngTouch', 'snap'])
    .config(function($routeProvider, snapRemoteProvider) { // provider-injector
        snapRemoteProvider.globalOptions.disable = 'right';
        snapRemoteProvider.globalOptions.hyperextensible = false;

        $routeProvider.when('/list', {
            templateUrl: 'views/list.html',
            controller: ListCtrl
        }).when('/notifications', {
            templateUrl: 'views/notifications.html',
            controller: NotificationsCtrl
        }).otherwise({
            redirectTo: '/list'
        });
});

app.run(['$rootScope', 'demoService', 'snapRemote', function($rootScope, demoService, snapRemote){
    $rootScope.demoService = demoService;
}]);

//app.provider("$test", function(){
//    this.$get = [function(){
//       var menu = {};
//       menu.toggle = function toggle() {
//           var body = angular.element(document.querySelector('body'));
//           body.toggleClass('menu-shown');              
//       };
//
//       return menu;
//    }];
//});

app.service('demoService', function() {
	return new (function() {
        this.menuStart = function(snapRemote) {
            snapRemote.start();
		};

        this.menuClose = function(snapRemote) {
            snapRemote.close();
		};
    })();
});

function ListCtrl($scope, $routeParams, ngProgress, snapRemote) {
    $scope.close = function(){
         snapRemote.close();
    }
   
    ngProgress.start();
    ngProgress.height('5px');
    $scope.loaded = false;

    $scope.getRoute = function() {
            if (typeof $routeParams.category != 'undefined') {
                    return  $routeParams.category;
            }
            return '';
    }
    ngProgress.complete();
}

ListCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];

function NotificationsCtrl($scope, $routeParams, ngProgress, snapRemote) {
        snapRemote.close();
        ngProgress.start();
        ngProgress.height('5px');
        ngProgress.complete();
}

NotificationsCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];