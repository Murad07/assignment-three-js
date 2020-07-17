// JavaScript Problem Solving Assignment By Murad Hossain.

// Problem 1 Feet to Mile Convert
function feetToMile(feet) {
  if (feet >= 0) {
    var mile = feet / 5280;
    return mile;
  } else {
    return 'Feet cannot be negative.';
  }
}

// Problem 2 Wood Calculator
function woodCalculator(chair, table, bad) {
  if (chair >= 0) {
    var totalWoodForChair = chair * 1;
  } else {
    return 'Number of Chair cannot be negative.';
  }
  if (table >= 0) {
    var totalWoodForTable = table * 3;
  } else {
    return 'Number of Table cannot be negative.';
  }
  if (bad >= 0) {
    var totalWoodForBad = bad * 5;
  } else {
    return 'Number of Bad cannot be negative.';
  }

  var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBad;
  return totalWood;
}

// Problem 3 Brick Calculator
function brickCalculator(floorNum) {
  if (floorNum < 0) {
    return 'Number of Floor cannot be negative.';
  } else {
    var aboveTwenty = 0;
    var elevenToTwenty = 0;
    var oneToTen = 0;

    if (floorNum > 20) {
      aboveTwenty = floorNum - 20;
      floorNum -= aboveTwenty;
    }
    if (floorNum > 10) {
      elevenToTwenty = floorNum - 10;
      floorNum -= elevenToTwenty;
    }
    if (floorNum <= 10) {
      oneToTen = floorNum;
    }

    var totalFeet = oneToTen * 15 + elevenToTwenty * 12 + aboveTwenty * 10;
    var totalBrick = totalFeet * 1000;
    return totalBrick;
  }
}

var result = brickCalculator(21);
console.log(result);
