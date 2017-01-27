app.factory('authFactory', ($q) => {
  return{
    login(email, pass) {
      console.log('Sent to Firebase: ', email, pass)
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
    },
    getUserId() {
      console.log('UID: ', firebase.auth().currentUser.uid)
      const UID = firebase.auth().currentUser.uid
      return UID
    },
    registerUser(email, pass) {
      console.log('Sent to Firebase: ', email, pass)
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword( email, pass).then(console.log))
    },
    logout(){
      console.log('Logged Out')
      return $q.resolve(firebase.auth().signOut())
    },
    createUser(obj){
      console.log('Factory Create User Fired')
      return $http.post('https://pinterested-in-scott-pins.firebaseio.com/users/.json');
    }
  }
})
