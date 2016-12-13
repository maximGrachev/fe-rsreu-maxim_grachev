var view = (function () {
    'use strict';

    function initialize() {
        var buttonBook = document.querySelector('#add-book-form');
        buttonBook.addEventListener('submit', onBookAdd);
        var buttonSearch = document.querySelector('#buttonPlace');
        buttonSearch.addEventListener('click', onSearch);
        var buttonAllBooks = document.querySelector('#all_books');
        buttonAllBooks.addEventListener('click', onAllBooks);
        var buttonMostPopular = document.querySelector('#most_popular');
        buttonMostPopular.addEventListener('click', onMostPopular);
        showRating(books);
    }

    function showRating(array) {
        var buttonRating = [];

        for (var i = 0; i < array.length; i++) {
            buttonRating[i] = [];

            for (var j = 0; j < 5; j++) {
                var id = i * 10 + j;

                buttonRating[i][j] = document.querySelector('#s' + id);
                buttonRating[i][j].addEventListener('click', onStarRating);
            }
        }
    }

    function onStarRating(event) {
        var id = event.target.id;

        Controller.rating(books, id);
    }

    function onBookAdd(event) {
        event.preventDefault();

        var title = document.querySelector('#titleOfBook');
        var author = document.querySelector('#autorOfBook');

        Controller.addBook(title.value, author.value, "assets\\images\\0.png");
        title.value = '';
        author.value = '';
    }

    function onAllBooks(event) {
        showBooks(books);
        initialize();
    }

    function onMostPopular(event) {
        Controller.mostPopular();
    }

    function onSearch() {
        event.preventDefault();

        var search = document.querySelector('#searchPlace');
        var searchText = search.value;

        Controller.search(searchText, books);
        search.value = '';
    }

    function showNotificationMostPopular() {
        var blockNotification = document.querySelector('.menu__block4__ul');
        var liNotification = document.createElement('li');
        var note1 = document.createElement('span');
        var blockTimeNotification = document.createElement('li');
        var timeNotification = document.createElement('span');
        var note4 = document.createElement('span');
        
        liNotification.setAttribute('class', 'note');
        blockTimeNotification.setAttribute('class', 'noteTime');
        timeNotification.setAttribute('class', 'timeOfNotification');

        note1.innerHTML = 'You chose the most popular books';
        note4.innerHTML = " minutes ago";

        liNotification.appendChild(note1);
        blockNotification.appendChild(liNotification);
        blockTimeNotification.appendChild(timeNotification);
        blockTimeNotification.appendChild(note4);
        blockNotification.appendChild(blockTimeNotification);

        return blockNotification;
    }

    function showNotificationSearch() {
        var blockNotification = document.querySelector('.menu__block4__ul');
        var liNotification = document.createElement('li');
        var note1 = document.createElement('span');
        var blockTimeNotification = document.createElement('li');
        var timeNotification = document.createElement('span');
        var note4 = document.createElement('span');
        
        liNotification.setAttribute('class', 'note');
        blockTimeNotification.setAttribute('class', 'noteTime');
        timeNotification.setAttribute('class', 'timeOfNotification');
       
        note1.innerHTML = 'You searched books';
        note4.innerHTML = " minutes ago";

        liNotification.appendChild(note1);
        blockNotification.appendChild(liNotification);
        blockTimeNotification.appendChild(timeNotification);
        blockTimeNotification.appendChild(note4);
        blockNotification.appendChild(blockTimeNotification);
      
        return blockNotification;
    }

    function showNotificationChangeRaiting() {
        var blockNotification = document.querySelector('.menu__block4__ul');
        var liNotification = document.createElement('li');
        var note1 = document.createElement('span');
        var blockTimeNotification = document.createElement('li');
        var timeNotification = document.createElement('span');
        var note4 = document.createElement('span');
             
        liNotification.setAttribute('class', 'note');
        blockTimeNotification.setAttribute('class', 'noteTime');
        timeNotification.setAttribute('class', 'timeOfNotification');
       
        note1.innerHTML = 'You changed rating of book';
        note4.innerHTML = " minutes ago";
        
        liNotification.appendChild(note1);
        blockNotification.appendChild(liNotification);
        blockTimeNotification.appendChild(timeNotification);
        blockTimeNotification.appendChild(note4);
        blockNotification.appendChild(blockTimeNotification);
       
        return blockNotification;
    }

    function showNotificationAddBook(book) {
        var blockNotification = document.querySelector('.menu__block4__ul');
        var liNotification = document.createElement('li');
        var note1 = document.createElement('span');
        var nameBookNotification = document.createElement('span');
        var note2 = document.createElement('span');
        var authorBookNotification = document.createElement('span');
        var note3 = document.createElement('span');
        var partNotification = document.createElement('span');
        var blockTimeNotification = document.createElement('li');
        var timeNotification = document.createElement('span');
        var note4 = document.createElement('span');
       
        liNotification.setAttribute('class', 'note');
        nameBookNotification.setAttribute('class', 'info_book');
        authorBookNotification.setAttribute('class', 'info_book');
        partNotification.setAttribute('class', 'info_book');
        blockTimeNotification.setAttribute('class', 'noteTime');
        timeNotification.setAttribute('class', 'timeOfNotification');
        
        note1.innerHTML = 'You added ';
        nameBookNotification.innerHTML = book.getTitle();
        note2.innerHTML = ' by ';
        authorBookNotification.innerHTML = book.getAuthor();
        note3.innerHTML = ' to your ';
        partNotification.innerHTML = 'Must Read Titles';
        note4.innerHTML = " minutes ago";
        
        liNotification.appendChild(note1);
        liNotification.appendChild(nameBookNotification);
        liNotification.appendChild(note2);
        liNotification.appendChild(authorBookNotification);
        liNotification.appendChild(note3);
        liNotification.appendChild(partNotification);
        blockNotification.appendChild(liNotification);
        blockTimeNotification.appendChild(timeNotification);
        blockTimeNotification.appendChild(note4);
        blockNotification.appendChild(blockTimeNotification);
        
        return blockNotification;
    }

    function showTimeNotification(notifications) {
        var timeNotification = document.querySelectorAll('.timeOfNotification');
        var newTimeNotification = [];
        var nowTime = new Date();
        var nowTimeMinutes = Utils.convertToMinutes(nowTime);

        for (var i = 0; i < timeNotification.length; i++) {
            var notificationTimeMinutes = [];
            notificationTimeMinutes[i] = notifications[i].getTime();
            timeNotification[i].innerHTML = '';
            newTimeNotification[i] = nowTimeMinutes - notificationTimeMinutes[i];
            if (newTimeNotification[i] >= 1) {
                timeNotification[i].innerHTML = newTimeNotification[i];
            }
            else {
                timeNotification[i].innerHTML = 'less then one';
            }
        }

        return timeNotification;
    }

    function showBooks(books) {
        var $container = document.querySelector('.main__three');
        var blockBook = [];
        var authorBook = [];
        var titleBook = [];
        var imageBook = [];
        var ratingBlock = [];
        var inputRating = [];
        var labelRating = [];

        $container.innerHTML = "";

        if (Array.isArray(books)) {
            for (var i = 0; i < books.length; i++) {
                blockBook[i] = document.createElement('div');
                authorBook[i] = document.createElement('span');
                titleBook[i] = document.createElement('span');
                imageBook[i] = document.createElement('img');
                ratingBlock[i] = document.createElement('div');
                inputRating[i] = [];
                labelRating[i] = [];

                blockBook[i].setAttribute('class', "main__three_book-block");
                authorBook[i].setAttribute('class', "book-autor");
                titleBook[i].setAttribute('class', "book-title");
                imageBook[i].setAttribute('src', books[i].getSource());
                ratingBlock[i].setAttribute('class', 'rating');

                for (var j = 0; j < Controller.MAX_RAITING; j++) {
                    inputRating[i][j] = document.createElement('input');
                    labelRating[i][j] = document.createElement('label');

                    inputRating[i][j].setAttribute('type', "radio");
                    inputRating[i][j].setAttribute('class', "rating-input");
                    inputRating[i][j].setAttribute('name', "rating" + i);
                    inputRating[i][j].setAttribute('id', 's' + (i * Controller.ID_SEPARATOR + j));
                    inputRating[i][j].setAttribute('bookId', i);

                    labelRating[i][j].setAttribute('class', "rating-star");
                    labelRating[i][j].setAttribute('for', 's' + (i * Controller.ID_SEPARATOR + j));

                    if (Controller.MAX_RAITING - j == books[i].getRating()) {
                        inputRating[i][j].setAttribute('checked', 'true');
                    }

                    ratingBlock[i].appendChild(inputRating[i][j]);
                    ratingBlock[i].appendChild(labelRating[i][j]);
                }

                authorBook[i].innerHTML = 'by ' + books[i].getAuthor();
                titleBook[i].innerHTML = books[i].getTitle();

                blockBook[i].appendChild(imageBook[i]);
                blockBook[i].appendChild(titleBook[i]);
                blockBook[i].appendChild(authorBook[i]);
                blockBook[i].appendChild(ratingBlock[i]);
                $container.appendChild(blockBook[i]);
            }

            return $container;
        }
        else {
            throw new Error('Must be an array of books');
        }
    }

    return {
        showBooks: showBooks,
        showRating: showRating,
        initialize: initialize,
        showNotificationMostPopular: showNotificationMostPopular,
        showNotificationAddBook: showNotificationAddBook,
        showNotificationSearch: showNotificationSearch,
        showNotificationChangeRaiting: showNotificationChangeRaiting,
        showTimeNotification: showTimeNotification
    };
} ());