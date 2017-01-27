
app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory, authFactory, boardFactory, $location){
  $scope.numLimit = 2;
  $scope.boardPictures = [];
  $scope.usablePicStructure = [];
  $scope.newBoard = {};

  firebaseFactory
    .getData()
    .then((val) => {

      //console.log(val.data.boards);
      $scope.boards = val.data.boards
      console.log($scope.boards);
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



    //passing data from board to modal so that data can be used for the $http methods
    $scope.dispModel = (name, dscrptn, k) => {
        $scope.boardName = name;
        $scope.boardDscrptn = dscrptn;
        $scope.key = k;
    };

    // Create new board from profile page
    $scope.createBoard = function() {

      boardFactory.postBoard($scope.newBoard)
      .then($scope.newBoard = {})
      //take you to your new board .then(() => $location.path('/'))
    }

    // Edits board through patch $http.method
    $scope.patchEdits = function(k) {
      boardFactory.patchBoard(k, $scope.newBoard)
      .then($scope.newBoard = {})
    }

    // Deletes new board from edit model
    $scope.deleteBoard = function(k) {
      boardFactory.deleteBoard(k)
    }


    $scope.log = () => {
      console.log("you");
    }


})


//$http, $routeParams
