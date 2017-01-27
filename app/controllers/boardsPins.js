app.controller('BoardsPinsCtrl', function($scope, firebaseFactory, pinFactory, authFactory, $location, $routeParams){
  console.log("BoardsPinsCtrl");

  $scope.newPin = {};

  pinFactory.getPins().then(function(val){
    console.log(val.data);
    $scope.pins = val.data
    //passes board key from board clicked and stores it
    $scope.boardKey = $routeParams.key

  })

  $scope.openPinModal = () =>{
    firebaseFactory
    .postPin($scope.newPin)
    .then(function(){
      $scope.newPin = {};
    });

  }

})
