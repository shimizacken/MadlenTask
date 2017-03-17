(function () {
    "use strict";

    mainApp.directive('bookDescription', [function () {
        /// <summary>directive for dispalying book description.</summary>

        return {
            templateUrl: "webApps/modules/books/templates/bookdescriptiontemplate.html",
            replace: true,
            scope: {
                description: "=",
            },
            controller: function ($scope) {
                
                $scope.showDescriptionDirective = false;
                $scope.showDescription = false;
                $scope.ShowDescriptionText = "Show description";

                if ($scope.description != undefined) {
                    $scope.showDescriptionDirective = true;
                }

                $scope.showHideDescription = function () {

                    $scope.showDescription = !$scope.showDescription;
                    $scope.ShowDescriptionText = !$scope.showDescription ? "Show description" : "Hide description";
                };
            }
        };
    }]);
    
}());