var app = angular.module('eater', ['ui.bootstrap']);

app.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.openE = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modals/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      windowClass: 'modal-fit',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
        modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.closeE = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2.html',
      controller: 'ModalInstanceCtrl',
      windowClass: 'modal-fit',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $scope.openC = function (size) {
    console.log("fcerfcwfczwf");
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modals/myModalContentC.html',
      controller: 'ModalInstanceCtrl',
      windowClass: 'modal-fit',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
        modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.closeC = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2C.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

