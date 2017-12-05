'use strict';

// Взаимодействие с окном пользователя

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Функции открытия-закрытия

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// События

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Изменение характеристик персонажа

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

var randomCoatColor = function () {
  var defineCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return defineCoatColor[Math.floor(Math.random() * defineCoatColor.length)];
};

var defineEyesColor = function () {
  var EyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  return EyesColor[Math.floor(Math.random() * EyesColor.length)];
};

var wizardAttributes = document.querySelector('.setup-wizard');
var wizardCoat = wizardAttributes.querySelector('.wizard-coat');
var wizardEyes = wizardAttributes.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var randomFireballColor = function () {
  var wizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  return wizardFireballColor[Math.floor(Math.random() * wizardFireballColor.length)];
};

var setCoatColor = function () {
  wizardCoat.style.fill = randomCoatColor();
};

var setEyesColor = function () {
  wizardEyes.style.fill = defineEyesColor();
};

var setWizardFireballColor = function () {
  wizardFireball.style.background = randomFireballColor();
};

wizardCoat.addEventListener('click', setCoatColor);
wizardEyes.addEventListener('click', setEyesColor);
wizardFireball.addEventListener('click', setWizardFireballColor);

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
