angular.module('menuSlider', [])
    .run(['$rootScope', '$spMenu', function($rootScope, $spMenu){
        $rootScope.$spMenu = $spMenu;
    }])
    .provider("$spMenu", function(){
        this.$get = [function(){
           var menu = {};
           menu.toggle = function toggle() {
               var body = angular.element(document.querySelector('body'));
               body.toggleClass('menu-shown');              
           };

           return menu;
        }];
    });