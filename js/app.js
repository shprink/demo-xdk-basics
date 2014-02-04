var app = angular.module('demobasics', ['ngRoute', 'ngProgress', 'ngTouch', 'snap', 'ajaxFactory'])
    .config(function($routeProvider, snapRemoteProvider) { // provider-injector
        snapRemoteProvider.globalOptions.disable = 'right';
        snapRemoteProvider.globalOptions.hyperextensible = false;

        $routeProvider.when('/list', {
            templateUrl: 'views/list.html',
            controller: ListCtrl
        }).when('/home', {
            templateUrl: 'views/home.html',
            controller: HomeCtrl
        }).when('/notifications', {
            templateUrl: 'views/notifications.html',
            controller: NotificationsCtrl
        }).when('/item/:id', {
            templateUrl: 'views/item.html',
            controller: NotificationsCtrl
        }).otherwise({
            redirectTo: '/home'
        });
});

app.run(['$rootScope', 'snapRemote', 'ngProgress', 'Ajax', '$log', function($rootScope, snapRemote, ngProgress, Ajax, $log){
    ngProgress.height('5px');
     $rootScope.menuClose = function(){
        snapRemote.close();
     }
     $rootScope.menuStart = function(){
        snapRemote.start();
     }
     
     $rootScope.menus = Ajax.query({
            file: 'menu'
            }, function(demo) {
                $rootScope.$broadcast( 'menu.success' );
            }, function(error) {
                $rootScope.$broadcast( 'menu.error' );
        });
}]);

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

//module.service( 'Menu', [ '$rootScope', 'Ajax', function( $rootScope, Ajax ) {
//    var service = {
//        books: [
//            { title: "Magician", author: "Raymond E. Feist" },
//            { title: "The Hobbit", author: "J.R.R Tolkien" }
//        ],
//        
//        addBook: function ( book ) {
//            service.books.push( book );
//            
//        }
//        
//        Ajax.get({
//            file: 'menu'
//            }, function(demo) {
//                
//                $rootScope.$broadcast( 'menu.success' );
//            }, function(error) {
//                $rootScope.$broadcast( 'menu.error' );
//        });
//    }
//    
//    return service;
//}]);

angular.module('ajaxFactory', ['ngResource'])
		.factory('Ajax', function($resource) {
	return $resource('data/:file.json', {}, {
		query: {
            method:'GET',
			isArray: true,
			cache: false
		}
	});
});

function ListCtrl($scope, $routeParams, ngProgress, snapRemote) {
    snapRemote.close();
    ngProgress.start();
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
        ngProgress.complete();
}

NotificationsCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];

function HomeCtrl($scope, $routeParams, ngProgress, snapRemote) {
        snapRemote.close();
        ngProgress.start();
        ngProgress.complete();
}

HomeCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];

function ItemCtrl($scope, $routeParams, ngProgress, snapRemote) {
        snapRemote.close();
        ngProgress.start();
        ngProgress.complete();
}

ItemCtrl.$inject = ['$scope','$routeParams', 'ngProgress', 'snapRemote'];