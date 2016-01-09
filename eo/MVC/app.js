var app = angular.module('myapp', ['ionic', 'ui.router']);
app.controller('sample', ['$scope', '$state', '$ionicPopup', function($scope, $state, $ionicPopup) {
    $scope.newUser = {};
    $scope.enter = function() {

        $state.go('options');

    }
    $scope.back = function() {
        history.go(-1);
    };
    $scope.add = function() {
        $state.go('add');
    };
    $scope.search = function() {
        $state.go('search');
    };
}]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

        .state('index', {
            url: '/',
            templateUrl: './resources/apps/mainview.html'
        })
        .state('options', {
            url: '/select',
            templateUrl: './resources/apps/optionpage.html',
        })
        .state('add', {
            url: '/newevent',
            templateUrl: './resources/apps/addevent.html',
        })
        .state('search', {
            url: '/search',
            templateUrl: './resources/apps/searchpage.html',
        })

}]);