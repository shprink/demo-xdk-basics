var app = angular.module('demobasics', ['ngRoute', 'ngProgress', 'snap']).config(function($routeProvider, $sceDelegateProvider, snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
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

function ListCtrl($scope, $routeParams, ngProgress, snapRemote) {
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
//    
//    snapRemote.getSnapper().then(function(snapper) {
//      snapper.on('open', function() {
//        logger.info('Opened!');
//      });
//
//      snapper.on('close', function() {
//        logger.info('Closed!');
//      });
//    });
}

ListCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];

function NotificationsCtrl($scope, $routeParams, ngProgress) {
        ngProgress.start();
        ngProgress.height('5px');
        ngProgress.complete();
}

NotificationsCtrl.$inject = ['$scope','$routeParams', 'ngProgress'];