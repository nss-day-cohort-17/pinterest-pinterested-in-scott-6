app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory, authFactory, $location){
  $scope.numLimit = 2;
  $scope.boardPictures = [];
  $scope.usablePicStructure = [];

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
          // ES6 function to allow boardsKey to be used as the key
          var obj = { [boardsKey] : [] };
          for (var pinKey in $scope.pins) {
            if (boardsKey === $scope.pins[pinKey].boardKey) {
              obj[boardsKey].push($scope.pins[pinKey].imageURL);
              }
            }
            $scope.boardPictures.push(obj);
          }
        }).then(function() {
          for (let i = 0; i < $scope.boardPictures.length; i++) {
            for (var key in $scope.boardPictures[i]) {
              // console.log($scope.boardPictures[i][key])
              if ($scope.boardPictures[i][key].length > 6) {
                // console.log($scope.boardPictures[i][key])
                $scope.boardPictures[i][key] = $scope.boardPictures[i][key].slice(0, 6);
              }
            }
          }
          console.log($scope.boardPictures)
        })
        // .then(function() {
        //   for (var key in $scope.boardPictures) {
        //     $scope.usablePicStructure.push({ [key] : $scope.boardPictures});
        //     console.log('usable', $scope.usablePicStructure)
        //   }
        // })
      })

  $scope.logout = () => authFactory
  .logout()
  .then(() => $location.path('/'))
})


//$http, $routeParams
