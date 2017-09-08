// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function () {
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function (countId) {
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function (countId) {
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function (countId) {
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function (counter) { //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function (newCountId) {
    console.log(`insert counter component #${newCountId}`);
    let newCounterDiv = document.createElement('div');
    newCounterDiv.innerHTML = `<h3>Count: <span>0</span></h3> <button class='increment'> +1 </button> <button class='delete'> Delete </button>`;
    newCounterDiv.className += 'counter';
    newCounterDiv.dataset.countId = newCountId;
    newCounterDiv.getElementsByClassName('increment')[0].onclick = AppController.onClickIncrement;
    newCounterDiv.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
    document.getElementById('counter-list').appendChild(newCounterDiv);
  },
  refreshCounterComponent: function (countId) {
    console.log(`refresh counter component #${countId}`);
    let countValue = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = countValue;
  },
  removeCounterComponent: function (countId) {             // REACH
    console.log(`remove counter component #${countId}`);
    let counter = document.querySelector(`[data-count-id="${countId}"]`);
    counter.parentNode.removeChild(counter);

  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function (event) {
    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
  },
  onClickIncrement: function (event) {
    let countId = Number(event.target.parentNode.dataset.countId);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function (event) {                           // REACH
    let countId = Number(event.target.parentNode.dataset.countId);
    Presenter.removeCounterComponent(countId);  
  }
};

window.onload = function () {
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
