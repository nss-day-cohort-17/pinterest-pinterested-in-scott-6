app.controller('ProfileCrtl', function($scope, firebaseFactory){
    firebaseFactory.getData().then((val)=>{
      console.log(val.data.boards);
      $scope.boards = val.data.boards
    })

})


//$http, $routeParams
