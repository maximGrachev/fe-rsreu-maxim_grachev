var main = (function (View, Controller) {
    'use strict';

    var controller = new Controller();
    var view = new View();

    controller.setView(view);
    view.setController(controller);

    view.initialize();
    view.showTasks(tasks);  
} (View, Controller));