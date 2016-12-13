var Notification = (function () {
    "use strict";
    
    function Notification(type, time) {
        var _type;
        var _time;

        this.getType = function () {
            return _type;
        };

        this.getTime = function () {
            return _time;
        };

        this.setType = function (type) {
            if (type) {
                _type = type;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setTime = function (time) {
            if (time) {
                _time = time;
            } else {
                throw new Error('Not be blank');
            }
        };

        this.setType(type);
        this.setTime(time);
    }

    return Notification;
} ());