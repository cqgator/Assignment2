angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {

    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.search='';
    
    $scope.addListing = function() {
		$scope.listings.push({
			"code": $scope.DirectoryCode,
			"name": $scope.DirectoryName,
      "address": $scope.DirectoryAddress
    });
  };
  
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1 );
  };
  
    $scope.showDetails = function(index) {
		$scope.Details = $scope.listings[index];
	};
  }
]);