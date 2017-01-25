<<<<<<< HEAD
console.log('logCtrl');
app.controller('logCtrl', function(firebaseFactory, $scope) {
=======
app.controller('logCtrl', function($scope, firebaseFactory){
  let x = getdata();
  console.log("firebase get data: ",x);
>>>>>>> 32d4c1a15e8945b2234629a433639db94b6a6b43
})

//ng-include
