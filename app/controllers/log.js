app.controller('logCtrl', function($scope, authFactory, $location, $http, $q){
  $scope.formData = {};
  console.log('login Ctrl fired', $scope.formData)

  $scope.login = () => authFactory

      .login($scope.email, $scope.password)
      .then(() => $location.url('/profile'))
      console.log('login fired')

  $scope.registerUser = (formData) => authFactory

      .registerUser($scope.formData.email, $scope.formData.password)
      .then(function(){
        let UID = firebase.auth().currentUser.uid
        let userObj =  {
          email : $scope.formData.email,
          firstName : $scope.formData.fname,
          lastName : $scope.formData.lname,
          uid : UID
        }
        //console.log('userObj', $scope.userObj)
        $scope.createUser = (userObj) => authFactory
        .createUser($scope.userObj)

        .then(() => $location.url('/profile'))
        //  console.log('Create User Complete', UID, $scope.userObj)
      })
})//--/controller
