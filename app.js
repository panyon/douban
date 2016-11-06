/**
 * Created by Administrator on 2016/10/25.
 */

//整体模块的定义

//对于modul 的第二个参数 其含义为该模块一来模块
var app = angular.module('app', [
    'ngRoute',
    'app.movieList',
    'app.movieDetail',
    'ui.bootstrap'
]);

//选择指令
app.directive('selectLink', [function () {
    var item = [];
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            item.push(element);
            //事件绑定
            element.bind('click', function (e) {
                item.forEach(function (item) {
                    if (item === element) {
                        item.parent().addClass("active");
                    } else {
                        item.parent().removeClass("active");
                    }
                })
            })
        }
    }

}]);

//数据加载

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/detail/:movieId', {
        controller: 'MovieDetailController',
        //导入模板路径
        templateUrl: 'movie/movie_detail.html'
    }).when('/:type/:page?', {
        controller: 'MovieListController',
        templateUrl: 'movie/movie_list.html'
    }).otherwise({
        redirectTo: '/in_theaters/1'
    })
}]);

app.constant('URLConfig', {
    page_size: 20,
    appURL: 'https://api.douban.com/v2/movie'
});