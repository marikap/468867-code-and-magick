'use strict';

(function () {
  var colorize = function (elementToColorize, elementToSave, colorsArray) {
    var indexColor = 0;
    elementToColorize.addEventListener('click', function () {
      indexColor = (indexColor + 1) % colorsArray.length;
      var color = colorsArray[indexColor];
      if (elementToColorize.tagName.toLowerCase() === 'div') {
        elementToColorize.style.backgroundColor = color;
      } else {
        elementToColorize.style.fill = color;
      }
      elementToSave.value = color;
    });
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var coatColor = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  colorize(wizardCoat, coatColor, window.PARAMETERS.COATS_COLORS);

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesColor = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  colorize(wizardEyes, eyesColor, window.PARAMETERS.EYES_COLORS);

  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('.setup-fireball-wrap input[name="fireball-color"]');
  colorize(fireballWrap, fireballColor, window.PARAMETERS.FIREBALL_COLORS);
})();
