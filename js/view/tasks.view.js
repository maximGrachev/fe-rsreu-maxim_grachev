var View = (function () {
    'use strict';

    var that;

    function View() {
        var _controller;

        this.setController = function (controller) {
            if (controller) {
                _controller = controller;
            } else {
                throw new Error('It is not controller');
            }
        };

        this.getController = function () {
            return _controller;
        };

        that = this;
    }

    View.prototype.initialize = function initialize() {
        var addTask = document.querySelector('#addButton');
        addTask.addEventListener('click', this.onTaskAdd);
    };

    View.prototype.onTaskAdd = function onTaskAdd(event) {
        event.preventDefault();

        var controller = that.getController();
        var textOfTask = document.querySelector('#newTask');

        controller.addTask(textOfTask.value, false);
        textOfTask.value = '';
    };

    View.prototype.showTasks = function showTasks(tasks) {
        var $container = document.querySelector('#tasksField');

        $container.innerHTML = '';

        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i].render(i);
            $container.appendChild(task);
        }

        var tasksElement = document.querySelectorAll('.viewTasks');
        for (var i = 0; i < tasks.length; i++) {
            tasksElement[i].addEventListener('click', that.onCompleteTask);
        }

        return $container;
    };

    View.prototype.onCompleteTask = function onCompleteTask(event) {
        var task = event.target;
        var fullId = task.getAttribute('id');
        var id = parseInt(fullId);
        var controller = that.getController();

        controller.completeTask(id);
    };

    return View;

} ());