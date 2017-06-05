/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('LoginCtrl', function ($scope, $ocLazyLoad, $cookies, GetAllSliders, DeleteSlider, $http) {







  this.selectedIndex = 0;


  this.resetPassClk = function () {
    this.selectedIndex = 2;
  };


  this.registerClk = function () {
    this.selectedIndex = 3;
  };




});

