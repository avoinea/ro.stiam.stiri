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
  Query.first().then(function(resp){
      $scope.articles = resp.items;
  });

  $scope.getItemHeight = function(item) {
    if(item && item.thumbnail){
      return 800;
    }else{
      return 400;
    }
  };

  $scope.loadMore = function(){
    return Query.next();
  }

});
