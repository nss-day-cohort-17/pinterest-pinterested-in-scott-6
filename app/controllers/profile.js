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

    // Object:
    angular.forEach($scope.pins, function (value, prop, obj) {
      console.log('value', value); // Todd, UK
      console.log('prop', prop); // name, location
      console.log('obj', obj); // { name: 'Todd', location: 'UK' }, { name: 'Todd', location: 'UK' }
    });
    // forEach (let$scope.pins6
})


//$http, $routeParams
