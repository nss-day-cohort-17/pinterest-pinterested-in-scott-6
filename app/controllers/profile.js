app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory){
    $scope.numLimit = 2;
    firebaseFactory.getData().then((val)=>{
      //console.log(val.data.boards);
      $scope.boards = val.data.boards
    })
    pinFactory.getPins().then((pins)=> {
      console.log('pins from profile', pins.data)
      $scope.pins = pins.data;
    })
})


//$http, $routeParams
