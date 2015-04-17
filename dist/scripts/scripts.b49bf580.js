"use strict";angular.module("dec31App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dec31App").controller("MainCtrl",["$scope",function(a){a.calendar=[{label:"January",value:1,days:31},{label:"February",value:2,days:28},{label:"March",value:3,days:31},{label:"April",value:4,days:30},{label:"May",value:5,days:31},{label:"June",value:6,days:30},{label:"July",value:7,days:31},{label:"August",value:8,days:31},{label:"September",value:9,days:30},{label:"October",value:10,days:31},{label:"November",value:11,days:30},{label:"December",value:12,days:31}],a.selectedMonth=a.calendar[0],a.selectedDay=1,a.month="January",a.day=1,a.compareMonth=a.selectedMonth.value,a.playerTurn=1,a.turnColor=a.playerTurn%2===0?"#66CCFF":"#FF0033",a.addTurn=function(){a.selectedMonth.label!=a.month&&a.selectedDay!=a.day&&alert("You can't change both the day and month on the same turn."),a.selectedMonth.label==a.month&&a.selectedDay==a.day?alert("You have to change either the month or the day."):(a.selectedMonth.label==a.month&&a.selectedDay!=a.day&&(a.day=a.selectedDay,a.playerTurn++),a.selectedMonth.label!=a.month&&a.selectedDay==a.day&&(a.month=a.selectedMonth.label,a.compareMonth=a.selectedMonth.value,a.playerTurn++))},a.gameCalendar={},a.update=function(b){a.gameCalendar=angular.copy(b)},a.trimMonths=function(){},a.largerThanMonth=function(b){return b.value>=a.compareMonth}}]),angular.module("dec31App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);