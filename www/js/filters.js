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


.filter('roCards', function() {
  return function(input) {
    return input ? 'card' : '';
  }
})


.filter('roDate', function() {
  return function(date) {

    var now = new Date();

    var past = new Date(date);
    var delta = (now-past)/1000;
    if(delta < 0){
      return 'acum cateva secunde';
    }
    // Minutes
    if(delta < 120){
      return 'acum un minut';
    }
    if(delta < 3300){
      var min = parseInt(delta/60, 10);
      return 'acum ' + min + ' minute';
    }
    // Hours
    if(delta < 7200){
      return 'acum o ora';
    }
    if(delta < 72000){
      var hours = parseInt(delta / 3600, 10);
      return 'acum ' + hours + ' ore';
    }
    // Days
    delta = delta / 3600;
    if(delta < 48){
      return 'ieri';
    }
    if(delta < 160){
      var days = parseInt(delta / 24, 10);
      return 'acum ' + days + ' zile';
    }
    // Weeks
    if(delta < 336){
      return 'saptamana trecuta';
    }
    if(delta < 720){
      var weeks = parseInt(delta/24/7, 10);
      return 'acum ' + weeks + ' saptamani';
    }
    // Months
    delta = delta / 24;
    if(delta < 60){
      return 'acum o luna';
    }
    if(delta < 360){
      var months = parseInt(delta/30, 10);
      return 'acum ' + months + ' luni';
    }
    // Years
    if(delta < 720){
      return 'acum un an';
    }
    if(delta>720){
      var years = parseInt(delta/360, 10);
      return 'acum ' + years + ' ani';
    }
  }
});
