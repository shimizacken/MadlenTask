(function () {
    "use strict";

    mainApp.factory('Core.JSONPService', ['$http', function ($http) {
        /// <summary>service that responsible for wraping and handling JSON-P HTTP requests.</summary>

        function get(url) {

            return $http({
                method: 'GET',
                url: url
            });
        }

        return {
            get: get
        };

    }]);

}());