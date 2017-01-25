app.factory('authFactory', ($q) => {
  return{
    login(email, pass) {
      console.log('Sent to Firebase: ', email, pass)
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
    },
    getUserId() {
      console.log('UID: ', firebase.auth().currentUser.uid)
      return firebase.auth().currentUser.uid
    },
    registerUser(email, pass) {
      console.log('Sent to Firebase: ', email, pass)
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword( email, pass).then(console.log))
    }
    logout(){
      return firebase.auth().signOut()
    }
  }
})
