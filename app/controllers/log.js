app.controller('logCtrl', function($scope, authFactory, $location){
  console.log('login Ctrl fired')
  $scope.login = () => authFactory
    .login($scope.email, $scope.password)
    .then(() => $location.url('/profile'))
  $scope.registerUser= () => authFactory
    .registerUser($scope.email, $scope.password)
    .then(() => $location.url('/profile'))
})
