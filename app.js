angular.module('angelPro', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate']);

angular.module('angelPro').config(function($routeProvider) {

    $routeProvider.when('/mypartial/:id',{templateUrl: 'partial/my-partial/my-partial.html'});
    $routeProvider.when('/list/',{templateUrl: 'partial/list/list.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('angelPro').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
