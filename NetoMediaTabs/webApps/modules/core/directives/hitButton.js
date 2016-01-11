(function () {
    "use strict";

    mainApp.directive('hitButton', [function () {
        /// <summary>directive for transform a given button to a hit button.</summary>

        return {
            link: function (scope, element, attrs) {

                element.bind('keyup', function ($event) {

                    var enterButtonID = 13;

                    if ($event.keyCode == enterButtonID) {
                        scope.search();
                    }
                });
            }
        };
    }]);
}());