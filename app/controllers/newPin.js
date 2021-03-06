app.controller('NewPinCrtl', function($scope, firebaseFactory, pinFactory){
  //console.log("NewPinCrtl");
  $scope.checkboxChecked = false;
  $scope.newBoard = {};
  $scope.newPin = {};

  // get data from firebase
  firebaseFactory.getData().then(function(val) {
    $scope.pins = val.data.pins;
    $scope.boards = val.data.boards;
    // console.log('pin', $scope.pins);
    // console.log('board', $scope.boards);
  });

  // push data to firebase
  $scope.addData = function() {
    // if new board is selected, create a board then make the pin run
    if ($scope.checkboxChecked === true) {
      // console.log('make new board');
      firebaseFactory
        // make new board and send to firebase
        .postBoard($scope.newBoard)
        // then get the board key from firebase and apply it to the newPin
        .then(function(response) {
          // console.log('response key', response.data.name);
          $scope.newPin.boardKey = response.data.name;
          // console.log("newPin boardKey", $scope.newPin.boardKey)
        })
        .then(function(){
          firebaseFactory.postPin($scope.newPin);
        })
        .then(function() {
          $scope.newBoard = {};
          $scope.newPin = {};
        })
        // then navigate to the pins page
    }
    // if user selects existing board the just add the pin with preexisting board key
    else {
      firebaseFactory
        .postPin($scope.newPin)
        .then(function(){
          $scope.newBoard = {};
          $scope.newPin = {};
      });
    }
  }
})
