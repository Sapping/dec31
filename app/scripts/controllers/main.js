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
    $scope.playerTurn = 1;
    if ($scope.playerTurn%2===0){
        $scope.turnColor = '#66CCFF';
    }
    else{
        $scope.turnColor = '#FF0033';
    }

    $scope.addTurn = function(){
        if ($scope.selectedMonth.label != $scope.month && $scope.selectedDay != $scope.day){
            alert("You can't change both the day and month on the same turn.");
        }
        if ($scope.selectedMonth.label == $scope.month && $scope.selectedDay == $scope.day){
            alert("You have to change either the month or the day.");
        }
        else {
            if ($scope.selectedMonth.label == $scope.month && $scope.selectedDay != $scope.day){
            $scope.day = $scope.selectedDay;
            $scope.playerTurn ++;
            }
            if ($scope.selectedMonth.label != $scope.month && $scope.selectedDay == $scope.day){
            $scope.month = $scope.selectedMonth.label;
            $scope.compareMonth = $scope.selectedMonth.value;
            $scope.playerTurn ++;
            }
        }
    };
    $scope.gameCalendar = {};
    $scope.update = function(calendar){
        $scope.gameCalendar = angular.copy(calendar);
    };
    $scope.trimMonths = function(gameCalendar) {
    };
    $scope.largerThanMonth = function(p){
        return p.value >= $scope.compareMonth;
    };
});
