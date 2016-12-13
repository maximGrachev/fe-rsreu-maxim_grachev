var Controller = (function () {
    'use strict';

    function Controller() {
        var _view;

        this.setView = function (view) {
            if (view) {
                _view = view;
            } else {
                throw new Error('It is not view');
            }
        };

        this.getView = function () {
            return _view;
        };
    }

    Controller.prototype.addTask = function addTask(title, status) {
        var view = this.getView();
        var newTask = new Task(title, status);

        tasks.unshift(newTask);
        view.showTasks(tasks);
    };

    Controller.prototype.completeTask = function completeTask(id) {
        var view = this.getView();
        var completeTask = tasks[id];
        tasks.splice(id, 1);

        completeTask.setStatus(!completeTask.getStatus());

        if (completeTask.getStatus()) {
            tasks.push(completeTask);
        } else {
            tasks.unshift(completeTask);
        }

        view.showTasks(tasks);
    }

    return Controller;
} ());
