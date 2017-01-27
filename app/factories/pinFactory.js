app.factory('pinFactory', function($http) {
  return {
    getPins: (pin) => {
      return $http.get('https://pinterested-in-scott-pins.firebaseio.com/pins/.json')
    }
  }
})
