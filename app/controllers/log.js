app.controller('LogCtrl', function($scope, authFacotry){
  $scope.login = () => {
    authFactory.login($scope.email, $scope.password)
    console.log('login: ',$scope.email, $scope.password)
      .then(() => {
        $location.url('/')
      })
  }
})
