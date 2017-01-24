app.config(function($routeProvider, $locationProvider){
$locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            controller: 'ProfileCrtl',
            templateUrl: 'partials/profile.html'
        })
        .when('/newpin', {
            controller: 'NewPinCrtl',
            templateUrl: '/partials/newPin.html'
        })
        .when('/pins', {
            controller: 'PinsCtrls',
            templateUrl: '/partials/pins.html'
        })
        .otherwise({
            redirectTo: '/'
        })

})
