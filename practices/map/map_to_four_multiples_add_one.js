'use strict';
var map_to_four_multiples_add_one = function(collection){
  // return [5,9,13,17,21];
  var resArr = [];
  for(var i in collection){
    resArr.push(collection[i]*4 + 1)
  }
  return resArr;
};

module.exports = map_to_four_multiples_add_one;
