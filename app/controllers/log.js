app.controller('logCtrl', function($scope, authFactory, $location, $http){
  $scope.formData = {};
  console.log('login Ctrl fired', $scope.formData)

  $scope.login = () => authFactory

      .login($scope.email, $scope.password)
      .then(() => $location.url('/profile'))
      console.log('login fired')

  $scope.registerUser = (formData) => authFactory

      .registerUser($scope.formData.email, $scope.formData.password)
      .then(() => {
        createUser({firstName : $scope.formData.fname,
          lastName : $scope.formData.lname, email : $scope.formData.email,
          uid : getUserId()})
      })
})//--/controller
