'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (event) {
      return event.keyCode === ESC_KEYCODE;
    },
    isEnterEvent: function (event) {
      return event.keyCode === ENTER_KEYCODE;
    },
  };
})();
