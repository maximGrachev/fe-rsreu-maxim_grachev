var Task = (function () {
    'use strict';

    function Task(title, status) {
        var _title;
        var _status;

        this.setTitle = function (title) {
            if (typeof (title) == "string") {
                _title = title;
            } else {
                throw new Error('It is not string');
            }
        };

        this.getTitle = function () {
            return _title;
        };

        this.setStatus = function (status) {
            if (typeof (status) == 'boolean') {
                _status = status;
            } else {
                throw new Error('It is not boolean');
            }
        };

        this.getStatus = function () {
            return _status;
        };

        this.setTitle(title);
        this.setStatus(status);
    }

    Task.prototype.render = function (number) {

        var task = document.createElement('div');
        var input = document.createElement('input');

        task.setAttribute('class', 'viewTasks form-group');
        task.setAttribute('id', number);
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', number);

        if (tasks[number].getStatus() == true) {
            input.setAttribute('checked', 'checked');
        }

        task.innerHTML = tasks[number].getTitle();
        task.appendChild(input);

        return task;
    }

    return Task;

} ());