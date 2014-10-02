angular.module('ro.stiam.stiri.directives', [])

.directive('articleBrick', function(){
   return {
     replace: true,
     restrict: 'E',
     templateUrl: 'templates/article-brick.html'
   }
})

.directive('ionFlipboard', [
  '$document',
  '$timeout',
function($document, $timeout) {
  return {
    restrict: 'E',
    controller: 'ListingCtrl',
    compile: function ($element, $attr) {
      var $children = $element.children();
      var listEl = $('<div>')
        .addClass('flipMe')
        .append($children)
        .addClass($attr.type);
      $element.append(listEl);

      return function($scope, $element, $attrs, ctrls) {

        $timeout(init, 1000);

        function init() {
          listEl.flip({
            forwardDir: 'btot'
          });
        }
      };
    }
  };
}]);
