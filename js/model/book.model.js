var Book = (function () {
    "use strict";
    
    function Book(title, author, source, rating) {
        var _title;
        var _author;
        var _source;
        var _rating;

        this.getTitle = function () {
            return _title;
        };

        this.getAuthor = function () {
            return _author;
        };

        this.getSource = function () {
            return _source;
        };

        this.getRating = function () {
            return _rating;
        };

        this.setTitle = function (title) {
            if (title) {
                _title = title;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setAuthor = function (author) {
            if (author) {
                _author = author;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setSource = function (source) {
            if (source) {
                _source = source;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setRating = function (rating) {
            if (rating) {
                _rating = rating;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setTitle(title);
        this.setAuthor(author);
        this.setSource(source);
        this.setRating(rating);
    }

    return Book;
} ());