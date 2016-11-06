/**
 * Created by Administrator on 2016/10/25.
 */

var md = angular.module('app.movieDetail', []);
md.controller('MovieDetailController',['$scope', 'URLconfig', '$http','$rootScope','$route', '$routeParams',
    function ($scope, URLconfig, $http,$rootScope,$route, $routeParams) {
        var appurl = URLconfig.appURL;
        var movieId = $routeParams.movieId;
        var url = appurl + 'subject/' + movieId + "?callback=movieDetailCallback";

        $http.jsonp(url).error(function () {

        });

        window.movieDetailCallback = function (jsonData) {
            $scope.movie = jsonData;
        }
}]);