'use strict';

/**
 * @ngdoc function
 * @name dec31App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dec31App
 */
angular.module('dec31App')
  .controller('MainCtrl', function ($scope) {
    $scope.calendar = [
    { label: 'January', value: 1, days: 31 },
    { label: 'February', value: 2, days: 28 },
    { label: 'March', value: 3, days: 31 },
    { label: 'April', value: 4, days: 30 },
    { label: 'May', value: 5, days: 31 },
    { label: 'June', value: 6, days: 30 },
    { label: 'July', value: 7, days: 31 },
    { label: 'August', value: 8, days: 31 },
    { label: 'September', value: 9, days: 30 },
    { label: 'October', value: 10, days: 31 },
    { label: 'November', value: 11, days: 30 },
    { label: 'December', value: 12, days: 31 }
    ];
    $scope.selectedMonth = $scope.calendar[0];
    $scope.selectedDay = 1;
    $scope.month = 'January';
    $scope.day = 1;
    $scope.compareMonth = $scope.selectedMonth.value;

    $scope.addTurn = function(){
      $scope.month = $scope.selectedMonth.label;
      $scope.day = $scope.selectedDay;
      $scope.compareMonth = $scope.selectedMonth.value;// Added here so that values stay linked when turn is added.
    };
    $scope.gameCalendar = {};
    $scope.update = function(calendar){
        $scope.gameCalendar = angular.copy(calendar);
    };
    $scope.trimMonths = function(gameCalendar) {
    }
    $scope.largerThanMonth = function(p){
        return p.value >= $scope.compareMonth;
    }
});
