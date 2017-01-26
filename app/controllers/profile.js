app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory, authFactory, $location){
    $scope.numLimit = 2;
    firebaseFactory.getData().then((val)=>{
      //console.log(val.data.boards);
      $scope.boards = val.data.boards
    })
    pinFactory.getPins().then((pins)=> {
      console.log('pins from profile', pins.data)
      $scope.pins = pins.data;
    })

    $scope.logout = () => authFactory
    .logout()
    //.then(() => $location.path('index.html'))

})


//$http, $routeParams
