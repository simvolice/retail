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

      .state('marketplace', {
        url: '/marketplace',
        templateUrl: 'components/marketplace/marketplace.html'
      })

      .state('news', {
        url: '/news',
        templateUrl: 'components/news/news.html'
      })


      .state('video', {
        url: '/video',
        templateUrl: 'components/video/video.html'
      })


      .state('home', {
        url: '/home',
        templateUrl: 'components/home/home.html'
      })
});