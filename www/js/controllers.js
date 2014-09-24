angular.module('ro.stiam.stiri.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the settings modal
  $scope.settingsData = {
    fontTitle: 100,
    fontDescription: 100,
    fontArticle: 100,
    theme: 'balanced',
    showImages: true,
    showImagesArticle: true
  };

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
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.showSettings = function() {
    $scope.modal.show();
  };

  $scope.saveSettings = function() {
    console.log('Settings saved', $scope.settingsData);
    $scope.closeSettings();
  };
})

.controller('NavCtrl', function($scope, $ionicNavBarDelegate) {

});
