app.factory('boardFactory', function($http) {
  return {
    postBoard: (board) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/boards/.json', board);
    },
    getBoard: (board) => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/boards/.json')
    },
    deleteBoard: (board) => {
      return $http.delete(`https://pinterested-in-scott-pins.firebaseio.com/boards/${board}.json`, )
    }
  }
})
1
