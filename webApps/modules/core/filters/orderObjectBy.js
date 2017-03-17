(function () {
    "use strict";

    mainApp.filter('orderObjectBy', ['Core.orderObjectByService', function (orderObjectByService) {
        /// <summary>filter that responsible for sort given object array.</summary>

        return function (items, field, reverse) {

            return orderObjectByService.sort(items, field, reverse);
        };
    }]);
}());