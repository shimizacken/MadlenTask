(function () {
    "use strict";

    mainApp.factory('Books.googleBooksModelService', [function () {
            /// <summary>service that responsible for building light model from the original model.</summary>

            function build(books) {

                var newBooks = [];

                angular.forEach(books, function (book) {

                    var model = {
                        title: book.volumeInfo.title,
                        subTitle: book.volumeInfo.subtitle,
                        description: book.volumeInfo.description,
                        publisher: book.volumeInfo.publisher,
                        authors: book.volumeInfo.authors,
                        infoLink: book.volumeInfo.infoLink,
                        smallThumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : null
                    };

                    newBooks.push(model);
                });

                return newBooks;
            }

            return {
                build: build
            };

        }]);

}());