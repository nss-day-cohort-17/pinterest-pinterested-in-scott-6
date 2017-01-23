app.config(function($routeProvider){

        $routeProvider
            .when('/profile', {
                controller: 'ProfileCrtl',
                templateUrl: 'partials/profile.html'
            }).when('/newpin', {
                controller: 'NewPinCrtl',
                templateUrl: '/partials/newPin.html'
            })
            .otherwise({
                redirectTo: '/profile'
            })

})
