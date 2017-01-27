app.factory('firebaseFactory', function($http, $q) {
  return {
    getData: () => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/.json');
    },
    postPin: (pin) => {
      return $q.resolve($http.post('https://pinterested-in-scott-pins.firebaseio.com/pins/.json', pin));
    },
    postBoard: (board) => {
      return $q.resolve($http.post('https://pinterested-in-scott-pins.firebaseio.com/boards/.json', board));
    },
    postUser: (user) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/users/.json', user);
    }
    // deleteMessage: (url) => {
    //   return $http.delete(url);
    // }
  }
})
