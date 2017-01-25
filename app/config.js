app.config(function($routeProvider, $locationProvider){
$locationProvider.hashPrefix('!');
    firebase.initializeApp({
        apiKey: "AIzaSyDLQO3OdUT6AeXMIMGXPFXEFNFifZBYo4E",
        authDomain: "pinterested-in-scott-pins.firebaseapp.com",
        databaseURL: "https://pinterested-in-scott-pins.firebaseio.com",
        storageBucket: "pinterested-in-scott-pins.appspot.com",
        messagingSenderId: "293020506124"
    })

    const checkForAuth = {
      checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }

    $routeProvider
        .when('/', {
            controller: 'ProfileCrtl',
            templateUrl: 'partials/profile.html',
            //resolve: checkForAuth
        })
        .when('/newpin', {
            controller: 'NewPinCrtl',
            templateUrl: '/partials/newPin.html',
            //resolve: checkForAuth
        })
        .when('/pins', {
            controller: 'PinsCtrl',
            templateUrl: '/partials/pins.html',
            //resolve: checkForAuth
        })
        .otherwise({
            redirectTo: '/'
        })
        
})

//
// <script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDLQO3OdUT6AeXMIMGXPFXEFNFifZBYo4E",
//     authDomain: "pinterested-in-scott-pins.firebaseapp.com",
//     databaseURL: "https://pinterested-in-scott-pins.firebaseio.com",
//     storageBucket: "pinterested-in-scott-pins.appspot.com",
//     messagingSenderId: "293020506124"
//   };
//   firebase.initializeApp(config);
// </script>
