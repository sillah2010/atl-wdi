// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  let changeArray = [];
  let wholeChange = (payment - price).toFixed(2);
  let coinChange = wholeChange - Math.floor(wholeChange);
  if (coinChange === 0) {
    return [0, 0, 0, 0];
  } else while (

  }

  }
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
