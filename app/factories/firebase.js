app.factory('firebaseFactory', function($http) {
  return {
    getData: () => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/.json');
    },
    postData: (pin) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/.json', pin);
    }//,
    // deleteMessage: (url) => {
    //   return $http.delete(url);
    // }
  }
})
