(function () {
    "use strict";

    mainApp.controller('Books.searchResultsController',
            ['$scope', 'Books.googleBooksAPIService', 'Books.googleBooksValue', 'Books.googleBooksModelService', 'Core.orderObjectByService',
                function ($scope, googleBooksAPIService, googleBooksValue, googleBooksModelService, orderObjectByService) {
                    /// <summary>controller that responsible for operating queries to the google books api.</summary>

                    // scope extensions
                    $scope.showLoading = false;
                    $scope.showSearchMessage = false;
                    $scope.showPager = false;
                    $scope.showSorter = false;
                    $scope.searchMessage = null;
                    $scope.authors = [];
                    $scope.searchOptions = googleBooksValue.searchOptions;
                    $scope.maxResults = googleBooksValue.maxResults;
                    $scope.bookSearchResultTemplate = "webApps/modules/books/templates/booksearchresulttemplate.html";
                    $scope.sortTypes = googleBooksValue.sortTypes;

                    $scope.search = function () {
                        // responsible for operates book search

                        $scope.books = null;
                        $scope.showStatistics = false;
                        $scope.showPager = false;
                        $scope.showSorter = false;
                        resetSearchErrorMessage();

                        if (isSearchBoxEmpty()) {
                            displaySearchErrorMessage();
                            return;
                        }

                        $scope.showLoading = true;

                        googleBooksAPIService.search($scope.query, $scope.searchOption)
                            .then(function successCallback(response) {

                                $scope.totalItems = response.data.totalItems;
                                $scope.books = googleBooksModelService.build(response.data.items);
                                displayResult();                                

                            }, function errorCallback(response) {

                                resetResult();
                            });
                    };

                    $scope.sortResult = function (sortTypes) {

                        $scope.books = orderObjectByService.sort($scope.books, sortTypes, true);
                    };


                    // private functions

                    function isSearchBoxEmpty() {

                        return $scope.query == null || $scope.query == undefined || $scope.query == '';
                    }

                    function resetResult() {

                        $scope.showLoading = false;
                        $scope.showStatistics = false;
                        $scope.showPager = false;
                        $scope.showSorter = false;
                    }

                    function displayResult() {

                        $scope.showLoading = false;
                        $scope.showStatistics = true;
                        $scope.showPager = true;
                        $scope.showSorter = true;
                    }

                    function resetSearchErrorMessage() {

                        $scope.showSearchMessage = false;
                        $scope.searchMessage = '';
                    }

                    function displaySearchErrorMessage() {

                        $scope.showSearchMessage = true;
                        $scope.searchMessage = "Lets start with typing some text...";
                    }

                }]);
}());