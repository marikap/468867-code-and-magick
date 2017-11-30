'use strict';
var userDialog = document.querySelector(' .setup');
userDialog.classList.remove('hidden');

var wizardsNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardsSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandom = function (randomMassive) {
  var randomValue = Math.floor(Math.random() * randomMassive.length);
  return randomMassive[randomValue];
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [];
for (var i = 0; i < 4; i++) {
  var wizardObj =
    {
      name: getRandom(wizardsNames) + ' ' + getRandom(wizardsSurnames),
      coatColor: getRandom(coatColor),
      eyesColor: getRandom(eyesColor)
    };

  wizards[i] = wizardObj;
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(getFragment());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
