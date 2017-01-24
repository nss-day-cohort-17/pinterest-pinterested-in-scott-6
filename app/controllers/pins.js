app.controller('PinsCtrl', function($scope, firebaseFactory){
    firebaseFactory.getData().then((val)=>{
      console.log(val.data.users);
      $scope.user = val.data.users
    })
})
