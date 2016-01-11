(function () {
    "use strict";

    mainApp.directive('bookThumbnail', [function () {
        /// <summary>directive for dispalying book thumbnail.</summary>

        return {
            template: '<div class="thumbnail">'
                        + '<img ng-src="{{thumbnail}}" class="thumbnail" />'
                   + '</div>',
            replace: true,
            scope: {
                thumbnail: "=",
            },
            controller: function ($scope) {

                if ($scope.thumbnail == null || $scope.thumbnail == '') {
                    $scope.thumbnail = 'images/siteElements/no-image.png';
                }
            }
        };
    }]);
    
}());