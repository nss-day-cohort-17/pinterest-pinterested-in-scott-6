app.controller('NewPinCrtl', function($scope, firebaseFactory){
  console.log("NewPinCrtl");
   $scope.pin = {};
  // add an ng-submit to the form to run a function to push to firebase
  $scope.addPin = function() {
    firebaseFactory.postData($scope.pin);
    //$http.post('https://mf-user-notes.firebaseio.com/.json', $scope.newNote);
    $scope.pin = {};
  }
})
