(function () {
    "use strict";

    mainApp.directive('bookInfoLink', [function () {
        /// <summary>directive for dispalying book info link.</summary>

        return {
            template: '<div class="open-in-new-tab">'
                        + '<a ng-href="{{infoLink}}" target="_blank" class="open-in-new-tab">'
                        + 'More details <img src="images/siteElements/link-new-tab.png" class="open-in-new-tab" /></a>'
                   + '</div>',
            replace: true,
            scope: {
                infoLink: "=",
            }
        };
    }]);
    
}());