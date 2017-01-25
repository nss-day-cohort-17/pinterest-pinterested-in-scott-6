app.factory('authFactory', function($q) {
  return{
    login(email, pass) {
      return $q.resolve(firebase.signInWithEmailAndPassword(email, pass))
    },
    getUserId() {
      return firebase.auth().currentUser.uid
    }
  }
})
