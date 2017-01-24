app.controller('NewPinCrtl', function($scope, firebaseFactory){
  //console.log("NewPinCrtl");
  $scope.checkboxModel = { value : false };
  $scope.newBoard = {};
  $scope.newPin = {};

  // get data from firebase
  firebaseFactory.getData().then(function(val) {
    $scope.pins = val.data.pins;
    $scope.boards = val.data.boards;
    console.log('pin', $scope.pins);
    console.log('board', $scope.boards);
  });

  // push data to firebase
  $scope.addData = function() {
    // if new board is selected, create a board then make the pin run
    if ($scope.checkboxModel.value === true) {
      firebaseFactory.postBoard($scope.newBoard)
        .then(firebaseFactory.postPin($scope.newPin));
    } else {
      firebaseFactory.postPin($scope.newPin);
    }
    // reset the form
    $scope.newBoard = {};
    $scope.newPin = {}
  }
})
