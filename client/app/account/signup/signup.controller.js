'use strict';

angular.module('badgerApp')
<<<<<<< HEAD
<<<<<<< HEAD
  .controller('SignupCtrl', function ($scope) {
=======
  .controller('SignupCtrl', function ($scope, Auth, $location) {
>>>>>>> c9ca65f543da6d5e0f8a8447b5bb159f3d96c0d1
=======
  .controller('SignupCtrl', function($scope, Auth, $location) {
>>>>>>> cbea8b88b5f13a647643bb89f3ca2b05f537d20b
    $scope.user = {};
    $scope.errors = {};
    $scope.minPasswordLength = 3;

    $scope.accountOptions = ['Client', 'Worker'];
    $scope.user.accountType = $scope.accountOptions[0];

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        var newUser = {
          name: $scope.user.name,
          location: $scope.user.location,
          email: $scope.user.email,
          password: $scope.user.password,
          accountType: $scope.user.accountType,
          summary: $scope.user.summary
        };

        // Add worker data if user is creating a worker account.
        if($scope.user.accountType === 'Worker') {
          newUser.skills = $scope.user.skills;
        }

        Auth.createUser(newUser)
          .then(function() {
            // Account created, redirect to home.
            $location.path('/dashboard');
          })
          .catch(function(err) {
            $scope.errors.other = err.message;
          });
      }
    };

  });
