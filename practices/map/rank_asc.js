'use strict';
var rank_asc = function(collection){
  // return [6,5,4,3,2];
  var sortedNumArr = collection.sort(function (a,b) {return b-a});
  return sortedNumArr;
};

module.exports = rank_asc;
