angular.module('ro.stiam.stiri.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the settings modal
  $scope.settingsData = {
    fontTitle: 150,
    fontDescription: 100,
    fontArticle: 100,
    theme: 'balanced',
    showSource: true,
    showImages: true,
    showDescription: true,
    showButtons: true,
    showCards: true,
    showImagesArticle: true
  };


  $scope.settingsDataUnsaved = {};
  for (key in $scope.settingsData){
      $scope.settingsDataUnsaved[key] = $scope.settingsData[key];
  }

  $scope.themes = [
      {name: "balanced", title: "Verde", pro: false},
      {name: "positive", title: "Albastră", pro: false},
      {name: "dark", title: "Neagră", pro: false},
      {name: "light", title: "Albă", pro: false},
      {name: "stable", title: "Gri", pro: false},
      {name: "energized", title: "Portocalie", pro: false},
      {name: "calm", title: "Turcoaz", pro: true},
      {name: "royal", title: "Mov", pro: true},
      {name: "assertive", title: "Roşie", pro: true}
  ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/settings.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSettings = function() {
    for (key in $scope.settingsDataUnsaved){
      $scope.settingsData[key] = $scope.settingsDataUnsaved[key];
    }
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.showSettings = function() {
    for (key in $scope.settingsData){
      $scope.settingsDataUnsaved[key] = $scope.settingsData[key];
    }
    $scope.modal.show();
  };

  $scope.saveSettings = function() {
    $scope.closeSettings();
  };
})

.controller('MenuCtrl', function($scope, App) {
    App.all().then(function(resp){
        $scope.categories = resp.categories.items;
        $scope.sources = resp.sources.items;
    });
})

.controller('ListingCtrl', function($scope, Query) {
  $scope.articles = [];
  $scope.properties = {};

  $scope.doRefresh = function() {
    Query.refresh().then(function(resp){
      $scope.articles = resp.items;
      $scope.properties = resp.properties;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.loadMore = function(){
    return Query.next().then(function(resp){
      var count = 0
      $(resp.items).each(function(idx, val){
//          if(!val.thumbnail){
//              return;
//          }
          count += 1;
          if(count > 3) {
              return;
          }
          $scope.articles.push(val);
      });
      $scope.properties = resp.properties;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  }

  $scope.moreDataCanBeLoaded = function(){
    var first = $scope.properties.first || 0;
    var last = $scope.properties.last || 20;
    if(first >= last){
      return false;
    }
    return true;
  }

  $scope.doClick = function (evt) {
    console.log(evt);
  };

  $scope.loadMore();



})

.controller('$ionicFlipbard', [
  '$scope',
  '$attrs',
  '$parse',
function($scope, $attrs, $parse) {

}]);
