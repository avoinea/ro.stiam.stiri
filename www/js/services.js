angular.module('ro.stiam.stiri.services', ['ngResource'])

/**
 * Articles
 */
.factory('App', function($q, $resource) {
   var baseUrl = 'http://stiam.ro/revista-presei-romanesti/app.json';

   var queryResource = $resource(baseUrl, {
     callback: 'JSON_CALLBACK'
   }, {
     get: {
       method: 'JSONP'
     }
   });

  return {
    all: function() {
      var q = $q.defer();

       queryResource.get({
           }, function(resp){
               q.resolve(resp);
           }, function(httpResponse){
               q.reject(httpResponse);
           }
       );

       return q.promise;
    }
  };
})

.factory('Query', function($q, $resource){
   var baseUrl = 'http://stiam.ro/revista-presei-romanesti/query.json';

   var queryResource = $resource(baseUrl, {
     callback: 'JSON_CALLBACK'
   }, {
     get: {
       method: 'JSONP'
     }
   });

   return {
     first: function (){
       var q = $q.defer();

       queryResource.get({
           }, function(resp){
               q.resolve(resp);
           }, function(httpResponse){
               q.reject(httpResponse);
           }
       );

       return q.promise;
     },
     next: function(){
       return {}
     }
   };

 });
