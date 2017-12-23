'use strict';

(function () {
  var NUMBER_WIZARDS = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomElement = function (arrayElements) {
    return arrayElements[Math.floor(Math.random() * arrayElements.length)];
  };

  var generateRandomWizard = function () {
    return {
      name: getRandomElement(window.PARAMETERS.FIRST_NAMES) + ' ' + getRandomElement(window.PARAMETERS.LAST_NAMES),
      coatColor: getRandomElement(window.PARAMETERS.COATS_COLORS),
      eyesColor: getRandomElement(window.PARAMETERS.EYES_COLORS)
    };
  };

  var wizards = [];
  for (var i = 0; i < NUMBER_WIZARDS; i++) {
    wizards[i] = generateRandomWizard();
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };


  var fillBlock = function (objectsArray, renderFunction) {
    var fragment = document.createDocumentFragment();
    for (i = 0; i < objectsArray.length; i++) {
      fragment.appendChild(renderFunction(objectsArray[i]));
    }
    return fragment;
  };
  similarListElement.appendChild(fillBlock(wizards, renderWizard));

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
