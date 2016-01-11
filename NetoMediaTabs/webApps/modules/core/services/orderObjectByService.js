(function () {
    "use strict";

    mainApp.factory('Core.orderObjectByService', [function () {
        /// <summary>service that responsible for sort given object array.</summary>

        function sort(items, field, reverse) {

            var filtered = [];

            angular.forEach(items, function (item) {

                filtered.push(item);
            });

            filtered.sort(function (a, b) {

                return (a[field] > b[field] ? 1 : -1);
            });

            if (reverse) {
                filtered.reverse();
            };

            return filtered;
        }

        return {
            sort: sort
        };

    }]);

}());