
/*================================================================
=>                  App = dreamcosplay
==================================================================*/
/*global angular*/

var app = angular.module('dreamcosplay', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    'use strict';

    $stateProvider
        .state('homepage', {
            url: '',
            templateUrl: '../app/partials/home/home.tpl.html',
            controller: "HomeCtrl"
        })
        .state('team', {
            url: '/team',
            templateUrl: '../app/partials/team/team.tpl.html',
            controller: "TeamCtrl"
        })
        .state('tutorials', {
            url: '/tutorials',
            templateUrl: '../app/partials/tutorials/tutorial.tpl.html',
            controller: "TutorialCtrl"
        })
        .state('blog-list', {
            url: '/blog-list',
            templateUrl: '../app/partials/blog/blog.tpl.html',
            controller: "BlogCtrl"
        })
        .state('blog', {
            url: '/blog',
            templateUrl: '../app/partials/blog/blog.post.tpl.html',
            controller: "BlogCtrl"
        })
        .state('shop', {
            url: '/shop',
            templateUrl: '../app/partials/shop/shop.tpl.html',
            controller: "ShopCtrl"
        })
}]);


/*================================================================
=>                  dreamcosplay App Run()
==================================================================*/

app.run(['$rootScope', function ($rootScope) {

    'use strict';
    console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
