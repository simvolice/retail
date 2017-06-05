/**
 * Created by Admin on 29.09.2016.
 */



var app = angular.module('app', ['ngMaterial', 'ui.router', 'oc.lazyLoad', 'md.data.table', 'ngMessages', 'ngResource', 'ngCookies' ]).config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true
  });




}]);


app.directive('ngFiles', ['$parse', function ($parse) {

  function fn_link(scope, element, attrs) {
    var onChange = $parse(attrs.ngFiles);
    element.on('change', function (event) {
      onChange(scope, { $files: event.target.files });
    });
  };

  return {
    link: fn_link
  }
} ]);



app.controller('MainCtrl', function ($scope, $location) {








});


