(function () {
    "use strict";

    mainApp.filter('bookDetail', [function () {
        /// <summary>filter that responsible for format book details.</summary>

        return function (input) {

            if (input == undefined || input == '') {
                return 'no details';
            }

            return input;
        };
    }]);
    
}());