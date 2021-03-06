// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module(
  'ro.stiam.stiri', [
    'ionic',
    'ro.stiam.stiri.controllers',
    'ro.stiam.stiri.services',
    'ro.stiam.stiri.directives',
    'ro.stiam.stiri.filters'
  ]
)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.navigator && window.navigator.splashscreen){
      navigator.splashscreen.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.listing', {
      url: "/listing",
      views: {
        'menuContent' :{
          templateUrl: "templates/listing.html"
        }
      }
    });


  $urlRouterProvider.otherwise('/app/listing');
});
