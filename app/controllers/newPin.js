app.controller('NewPinCrtl', function($scope, firebaseFactory){
  //console.log("NewPinCrtl");
  $scope.checkboxModel = { value : true };
  $scope.board = {};
  $scope.pin = {};

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
