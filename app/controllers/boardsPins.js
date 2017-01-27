app.controller('BoardsPinsCtrl', function($scope, firebaseFactory, pinFactory, authFactory, $location, $routeParams){
  console.log("BoardsPinsCtrl");

  $scope.filteredPins = {}

  pinFactory.getPins().then(function(val){
    console.log(val.data);
    $scope.pins = val.data

    //passes board key from board clicked and stores it
    $scope.boardKey = $routeParams.key

    angular.forEach($scope.pins, function(value, key) {
      if (value.boardKey === $scope.boardKey) {
        console.log($scope.boardKey + '=' + value.boardKey);

        
      } else {

      }
    })

  })


})
