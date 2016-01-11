(function () {
    "use strict";

    mainApp.factory('Books.googleBooksAPIService', ['Core.JSONPService', 'Books.googleBooksValue',
        function (JSONPService, googleBooksValue) {
            /// <summary>service that responsible for operating queries to the google books api.</summary>

            function search(query, searchOption) {

                var url = googleBooksValue.baseQueryURL + searchOption + ':' + query
                    + '&maxResults=' + googleBooksValue.maxResults;
                
                return JSONPService.get(url);
            }

            return {
                search: search
            };

        }]);

}());