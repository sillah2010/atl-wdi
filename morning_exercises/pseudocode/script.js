//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function (small, large, total) {
  let smallCost = 60;
  let largeCost = total - (smallCost * small);
  let remainingDubloons = largeCost / (small + large);
  return remainingDubloons;
};


//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function (fuelPrice, milesPerGallon) {
  const earthCir = 24901;
  const gasUsed = earthCir / milesPerGallon;
  const totalCost = gasUsed * fuelPrice;
  return totalCost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function (gallonsA, pureFruitA, gallonsB, pureFruitB) {
  const totalAFruitJuice = gallonsA * (pureFruitA/100);
  const totalBFruitJuice = gallonsB * (pureFruitB/100);
  const totalCombinedJuice = totalAFruitJuice + totalBFruitJuice;
  const totalAFruitJuice 

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
