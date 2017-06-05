/**
 * Created by Admin on 29.09.2016.
 */



app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider


      .state('index', {
        url: '/',
        view: {

          templateUrl: 'index.html'

        }

      })

      .state('login', {
        url: '/login',
        templateUrl: 'components/login/loginView.html'
      })

      .state('addcashier', {
        url: '/addcashier',
        templateUrl: 'components/addcashier/addcashierView.html'
      })


});