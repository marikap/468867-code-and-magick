'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action, additionalCondition) {
      if (typeof additionalCondition === 'undefined') {
        additionalCondition = true;
      }
      if (evt.keyCode === ESC_KEYCODE && additionalCondition) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
