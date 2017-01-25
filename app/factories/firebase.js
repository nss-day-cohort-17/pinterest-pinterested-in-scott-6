app.factory('firebaseFactory', function($http) {
  return {
    getData: () => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/.json');
    },
    postBoard: (board) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/boards/.json', board);
    },
    postUser: (user) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/users/.json', user);
    }
    // deleteMessage: (url) => {
    //   return $http.delete(url);
    // }
  }
})
