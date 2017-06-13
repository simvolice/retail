/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('LoginCtrl', function ($scope, $cookies, GetAllSliders, DeleteSlider, $http) {

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    simulateTouch: false

  });







  this.resetPassClk = function () {

    mySwiper.slideTo(2);

  };


  this.registerClk = function () {
    mySwiper.slideTo(3);
  };


  this.toRegisterClk = function () {
    mySwiper.slideTo(1);
  };



});

