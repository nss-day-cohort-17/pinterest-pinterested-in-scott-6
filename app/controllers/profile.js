app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory, authFactory, $location){
  $scope.numLimit = 2;
  $scope.boardPictures = [];

  firebaseFactory
    .getData()
    .then((val) => {
      //console.log(val.data.boards);
      $scope.boards = val.data.boards
    })
    .then(function() {
      pinFactory.getPins().then((pins)=> {
        // console.log('pins from profile', pins.data)
        $scope.pins = pins.data;
      })
      .then(function() {
        // for each board loop through the pins and add 6 to an array with boardKey: imageURL
        for (var boardsKey in $scope.boards) {
          var obj = { [boardsKey] : [] };
          for (var pinKey in $scope.pins) {
            if (boardsKey === $scope.pins[pinKey].boardKey) {
              obj[boardsKey].push($scope.pins[pinKey].imageURL);
              }
            }
            $scope.boardPictures.push(obj);
          }
          // console.log($scope.boardPictures);
        }).then(function() {
          for (let i = 0; i < $scope.boardPictures.length; i++) {
            for (var key in $scope.boardPictures[i]) {
              // console.log($scope.boardPictures[i][key])
              if ($scope.boardPictures[i][key].length > 6) {
                // console.log($scope.boardPictures[i][key])
                $scope.boardPictures[i][key] = $scope.boardPictures[i][key].slice(0, 6);
              }
          //   console.log($scope.boardPictures[i])
            }
          }
          console.log($scope.boardPictures)
        })
      })

  $scope.logout = () => authFactory
  .logout()
  .then(() => $location.path('/'))
})


//$http, $routeParams
