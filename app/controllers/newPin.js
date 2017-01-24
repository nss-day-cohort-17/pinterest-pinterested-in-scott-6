app.controller('NewPinCrtl', function($scope, firebaseFactory){
  //console.log("NewPinCrtl");
  $scope.checkboxModel = { value : true };
  // $scope.board = {};
  // $scope.pin = {};

  // get data from firebase
  firebaseFactory.getData().then(function(val) {
    $scope.pin = val.data.pins;
    $scope.board = val.data.boards;
    console.log('pin', $scope.pin);
    console.log('board', $scope.boards);
  });

  // push data to firebase
  $scope.addPin = function() {
    // if new board is selected, create a board then make the pin run
    if ($scope.checkboxModel.value === true) {
      firebaseFactory.postData($scope.board);
    } else {
    firebaseFactory.postData($scope.pin);
    }
    // reset the form
    $scope.board = {};
    $scope.pin = {}
  }
})
