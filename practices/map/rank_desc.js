'use strict';
var rank_desc = function(collection){
  // return [2,3,4,5,6];
  var sortedNumArr = collection.sort(function (a,b) {return a-b});
  return sortedNumArr;
};

module.exports = rank_desc;
