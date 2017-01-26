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

    // var obj = {a:1, b:2, c:3};

    // for (var prop in obj) {
    //   console.log('obj.' + prop, '=', obj[prop]);
    // }

    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"

    $scope.logout = () => authFactory
    .logout()
    .then(() => $location.path('/'))


    $scope.dispModel = (a) => {
        $scope.currentBoardModel = a
    };

})


//$http, $routeParams
