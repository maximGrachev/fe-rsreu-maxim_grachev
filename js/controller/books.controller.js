var Controller = (function (NOTIFICATION_TYPES, Notification) {
    'use strict'

    var MAX_RAITING = 5;
    var ID_SEPARATOR = 10;

    function addBook(title, author, image) {

        var book = new Book(
            title,
            author,
            image,
            1
        );

        var nowTime = new Date();
        var nowMinutes = Utils.convertToMinutes(nowTime);
        var notification = new Notification(NOTIFICATION_TYPES.ADD_BOOK, nowMinutes);
        notifications.push(notification);
        books.push(book);
        view.showBooks(books);
        view.showRating(books);
        showNotification(notification, book);
        view.showTimeNotification(notifications);
    }

    function showNotification(notification, book) {
        if (notification instanceof Notification) {
            switch (notification.getType()) {
                case NOTIFICATION_TYPES.MOST_POPULAR:
                    view.showNotificationMostPopular()
                    break;
                case NOTIFICATION_TYPES.ADD_BOOK:
                    view.showNotificationAddBook(book);
                    break;
                case NOTIFICATION_TYPES.RAITING:
                    view.showNotificationChangeRaiting();
                    break;
                case NOTIFICATION_TYPES.SEARCH:
                    view.showNotificationSearch();
                    break;
                default:
                    throw new Error('It is not type of notification');
            }
        }
    }

    function mostPopular() {
        var j = 0;
        var result = [];
        var replaced;

        for (var i = 0; i < books.length; i++) {
            if (books[i].getRating() === MAX_RAITING) {
                replaced = books[i];
                books.splice(i, 1);
                books.unshift(replaced);

            }
        }

        for (var i = 0; i < books.length; i++) {
            if (books[i].getRating() === MAX_RAITING) {
                result[j] = books[i];
                j++;
            }
        }

        var nowTime = new Date();
        var nowMinutes = Utils.convertToMinutes(nowTime);
        var notification = new Notification(NOTIFICATION_TYPES.MOST_POPULAR, nowMinutes);
        
        notifications.push(notification);
        showNotification(notification);
        view.showBooks(result);
        view.showRating(result);
        view.showTimeNotification(notifications);
    }

    function rating(books, star) {
        var id = star.slice(1, star.length);
        var index = Math.round(id / ID_SEPARATOR);
        var rating = id % ID_SEPARATOR;
        var nowTime = new Date();
        var nowMinutes = Utils.convertToMinutes(nowTime);
        var notification = new Notification(NOTIFICATION_TYPES.RAITING, nowMinutes);

        notifications.push(notification);

        books[index].setRating(5 - rating);
        showNotification(notification);
        view.showTimeNotification(notifications);
    }

    function search(searchText, books) {
        var result = [];

        function combinator(word) {
            var index = 0;
            var array = [];

            for (var j = 0; j < word.length; j++) {
                var combination = word[j];

                array[index] = combination;
                index = index + 1;

                for (var k = j + 1; k < word.length; k++) {
                    combination = combination + word[k];
                    array[index] = combination;
                    index = index + 1;
                }
            }

            return array;
        }

        for (var i = 0; i < books.length; i++) {
            var combination = combinator(books[i].getTitle());

            for (var j = 0; j < combination.length; j++) {
                if (combination[j].toLowerCase() == searchText.toLowerCase()) {
                    result.push(books[i]);
                    break;
                }
            }
        }

        var nowTime = new Date();
        var nowMinutes = Utils.convertToMinutes(nowTime);
        var notification = new Notification(NOTIFICATION_TYPES.SEARCH, nowMinutes);
        
        notifications.push(notification);
        
        view.showBooks(result);
        view.showRating(result);
        showNotification(notification);
        view.showTimeNotification(notifications);
    }

    return {
        MAX_RAITING: MAX_RAITING,
        ID_SEPARATOR: ID_SEPARATOR,
        addBook: addBook,
        mostPopular: mostPopular,
        rating: rating,
        search: search
    };
} (NOTIFICATION_TYPES, Notification));
