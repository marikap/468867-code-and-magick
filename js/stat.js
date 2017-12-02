'use strict';

window.renderStatistics = function (ctx, names, times) {
  var barHeigth = 20;
  var initialX = 150;
  var indent = 90;
  var initialY = 240;
  var lineWidth = 40;
  var histogramHeigth = -150;

  var drawResultField = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillRect(100, 10, 420, 270);
    ctx.strokeRect(100, 10, 420, 270);
    textResult();
  };

  var textResult = function () {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

// Максимальный элемент
  
  var getMaxElement = function (array) {
    var maxTime = -1;
    for (var i = 0; i < array.length; i++) {
      var time = array[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    return maxTime;
  };

  var getStep = function () {
    var maxTime = getMaxElement(times);
    var step = histogramHeigth / maxTime;
    return step;
  };

  var drawResultColumns = function () {
    var step = getStep();
    for (var i = 0; i < times.length; i++) {
      ctx.fillStyle = names[i] === 'Вы' ? 'red' : 'rgba(0, 0, 255, ' + getRandomValue(0.3, 1) + ')';
      ctx.fillRect(initialX + indent * i, initialY, lineWidth, times[i] * step);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], initialX + indent * i, initialY + barHeigth);
      ctx.fillText(Math.floor(times[i]), initialX + indent * i, histogramHeigth + initialY - barHeigth / 2);
    }
  };
  function getRandomValue(minRandom, maxRandom) {
    return Math.random() * (maxRandom - minRandom) + minRandom;
  }
  drawResultField();
  drawResultColumns();
};
