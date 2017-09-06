// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    document.getElementById('numeric-display').textContent = timerValue;
    let numericDisplay = document.getElementById('numeric-display');
    numericDisplay.textContent = timerValue;
    if (timerValue <= 10) {
      numericDisplay.style.color = 'red';
      let newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontSize = newSize + 'em';
    }
  },
  drawProgressBars: function (timerValue) {
    document.getElementsByClassName('progress-bar')[0].style.width = (100 - timerValue) + '%';

  
},
  drawLitFuses: function (timerValue) {
    let percentUnburnt = timerValue / 100;
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt * 98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt) * 98 + '%';
  
  },
  drawCrawlers: function (timerValue) {
    let timeElapsed = 100 - timerValue;
    if (timerValue % 2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';

  }
};
