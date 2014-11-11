/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		//accesses pawneeEmployees JSON file: makes the data array available to the view
		$scope.employees = pawneeEmployees;

		//establishes the property to sort by initially
		$scope.order = 'lastName';

		$scope.sortReverse = false;
		$scope.sortBy = function(colName) {
			if($scope.order == colName) {
				$scope.sortReverse = !$scope.sortReverse;
			} else {
				$scope.sortReverse = false;
				$scope.order = colName;
			}
		}

	});