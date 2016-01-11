(function () {
    "use strict";

    mainApp.directive('loadingIcon', [function () {
        /// <summary>directive for displaying loading/progress icon.</summary>

        return {
            template: '<img src="images/siteElements/ring.gif" ng-show="showLoading" />',
            replace: true
        };
    }]);

}());