console.log('logCtrl');
app.controller('logCtrl', function(firebaseFactory, ['$scope', function($scope) {
  $scope.example = {
    text: 'guest',
    word: /^\s*\w*\s*$/
  };
}]);

//ng-include
