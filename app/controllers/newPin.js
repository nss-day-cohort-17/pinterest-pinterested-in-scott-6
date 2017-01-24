app.controller('NewPinCrtl', function($scope, firebaseFactory){
  //console.log("NewPinCrtl");
  $scope.pin = {};
  $scope.addPin = function() {
    firebaseFactory.postData($scope.pin);
    //$http.post('https://mf-user-notes.firebaseio.com/.json', $scope.pin);
    $scope.pin = {}
  }

  $scope.board = {};
  $scope.addBoard = function() {
    firebaseFactory.postData($scope.board);
    $scope.board = {};
  }
})
