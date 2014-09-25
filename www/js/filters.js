angular.module('ro.stiam.stiri.filters', [])

.filter('roIconPath', function() {
  return function(input) {
    if(!input){
      return;
    }
    var source = input.split('/').splice(0, 5).join('/');
    return [source, 'image_crop'].join('/');
  };
})

.filter('roTextLower', function() {
  return function(input) {
    return input.toLowerCase();
  }
})

.filter('roDate', function() {
  return function(input) {
    return input + 'XXX';
  }
});
