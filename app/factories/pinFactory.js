app.factory('pinFactory', function($http) {
  return {
    postPin: (pin) => {
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/pins/.json', pin);
    },
    getPins: (pin) => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/pins/.json')
    }
  }
})
