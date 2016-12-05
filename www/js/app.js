// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('testCtrl', function ($scope, $state) {
  console.log('hello');

  $scope.upload = function () {

    window.imagePicker.getPictures(function(results) {
      console.log(results);
      var fileUrl = results[0];
      var apiUrl = 'http://localhost:3000'
      var ft = new FileTransfer();
      ft.upload(fileURL, uri, win, fail, options);
    }, function (error) {
        console.log('Error: ' + error);
    }, {
        maximumImagesCount: 1,
        width: 800
    });
  };
});
