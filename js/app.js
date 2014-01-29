var app = angular.module('demobasics', ['ngRoute', 'ngProgress']).config(function($routeProvider, $sceDelegateProvider) {
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

function ListCtrl($scope, $routeParams, ngProgress) {
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

ListCtrl.$inject = ['$scope','$routeParams', 'ngProgress'];

function NotificationsCtrl($scope, $routeParams, ngProgress) {
        ngProgress.start();
        ngProgress.height('5px');
        ngProgress.complete();
}

NotificationsCtrl.$inject = ['$scope','$routeParams', 'ngProgress'];