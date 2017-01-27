app.factory('boardFactory', function($http) {
  return {
    getBoard: (board) => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/boards/.json')
    },
    postBoard: (board) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/boards/.json', board);
    },
    patchBoard: (board, obj) => {
      return $http.patch(`https://pinterested-in-scott-pins.firebaseio.com/boards/${board}/.json`, obj);
    },
    deleteBoard: (board) => {
      return $http.delete(`https://pinterested-in-scott-pins.firebaseio.com/boards/${board}.json` )
    }
  }
})
