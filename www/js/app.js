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

  $scope.upload = function () {
    window.imagePicker.getPictures(function(results) {
      // file url and api url
      var fileUrl = results[0];
      console.log(fileUrl);
      var apiUrl = 'http://localhost:3000/api/v2/test/resource';
      // file options for file uploads
      var options = new FileUploadOptions();
      options.fileKey = 'unitPhoto';
      options.fileName = 'test_image';
      options.fileName = fileUrl.substr(fileUrl.lastIndexOf('/')+1);
      options.mimeType = 'image/jpeg';
      options.httpMethod = 'POST';

      // file transfer intialization
      var ft = new FileTransfer();
      // ft upload function to upload files
      ft.upload(fileUrl, apiUrl, function (response) {
        console.log('success', response);
      }, function (err) {
        console.log('err', err);
      }, options);


    }, function (error) {
        console.log('Error: ' + error);
    }, {
        maximumImagesCount: 1,
        width: 800
    });
  };
});
