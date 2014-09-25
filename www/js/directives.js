angular.module('ro.stiam.stiri.directives', [])

.directive('articleBrick', function(){
   return {
     replace: true,
     restrict: 'E',
     templateUrl: 'templates/article-brick.html'
   }
});
