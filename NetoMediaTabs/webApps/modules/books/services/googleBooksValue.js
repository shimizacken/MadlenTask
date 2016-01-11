(function () {
    "use strict";

    /// <summary>service that holds google books api related consts and objects.</summary>

    mainApp.value('Books.googleBooksValue', {
        'baseQueryURL': 'https://www.googleapis.com/books/v1/volumes?q=',
        'searchOptions': {
            title: 'intitle',
            subtitle: 'insubject',
            author: 'inauthor'
        },
        maxResults: 25,
        sortTypes: {
            title: 'title',
            subTitle: 'subTitle',
            description: 'description'
        }
    });

}());