app.controller('ProfileCrtl', function($scope, firebaseFactory, pinFactory, authFactory, boardFactory, $location){

    $scope.newBoard = {};

    $scope.numLimit = 2;
    firebaseFactory.getData().then((val)=>{
      //console.log(val.data.boards);
      $scope.boards = val.data.boards
      console.log($scope.boards);
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
