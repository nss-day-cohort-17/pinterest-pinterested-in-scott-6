app.controller('NewPinCrtl', function($scope, firebaseFactory){
  //console.log("NewPinCrtl");
  $scope.checkboxModel = { value : false };
  $scope.newBoard = {};
  $scope.newPin = {};

  // get data from firebase
  firebaseFactory.getData().then(function(val) {
    $scope.pins = val.data.pins;
    $scope.boards = val.data.boards;
    // console.log('pin', $scope.pins);
    // console.log('board', $scope.boards);
  });

  $scope.addKey = function(key) {
    console.log('key', key)
  }
  // push data to firebase
  $scope.addData = function() {
    // if new board is selected, create a board then make the pin run
    if ($scope.checkboxModel.value === true) {
      // console.log('make new board')
      firebaseFactory
        .postBoard($scope.newBoard)
        // then get the board key from firebase and apply it to the newPin
        .then(function(response) {
          // console.log('response key', response.data.name);
          $scope.newPin.boardKey = response.data.name;
          // console.log("newPin boardKey", $scope.newPin.boardKey)
        })
        .then(firebaseFactory.postPin($scope.newPin));
    }
    // if user selects existing board the just add the pin with preexisting board key
    else {
      firebaseFactory.postPin($scope.newPin);
    }
    // reset the form
    $scope.newBoard = {};
    $scope.newPin = {}
  }
})
