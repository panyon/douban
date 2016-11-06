/**
 * Created by Administrator on 2016/10/25.
 */

var ml = angular.module('app.movieList', []);
ml.controller('MovieListController', ['$scope','URLConfig', '$routeParams', '$http', '$rootScope', '$route',
    function ($scope,$URLConfig, $routeParams, $http, $rootScope, $route) {

    //配置界面显示的个数 和 获取数据的api
    var count = $URLConfig.page_size || 20;
    var appurl = $URLConfig.appURL;

    //获取分类的类型
    var type = $routeParams.type || 'in_theaters';
    var page = $routeParams.page || 1;

    $scope.currentPage = page;
    $scope.type = type;
    $scope.loading = true;
    $scope.size = count;

    var url = appurl + '/' + type + '?count=' + count + "&start=" + page + "&callback=movieListCallback";

    console.log(url);

    //请求失败
    $http.jsonp(url).error(function () {
        //请求失败
    });

    window.movieListCallback = function (jsonData) {
        console.log(jsonData);

        $scope.title = jsonData.title;
        $scope.total = jsonData.total;
        $scope.movies = jsonData.subjects;
        $scope.loading = false;
    };

    $scope.$watch('currentPage', function (newP, oldP) {
        if (newP != oldP) {
            $scope.updateParams({
                page: newP
            })
        }
    })

}]) ;
