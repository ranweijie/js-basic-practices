'use strict';
var map_to_three_multiples = function(collections){
  // return [3,9,15,12,27];
  var resArr = [];
  for(var i in collections){
    resArr.push(collections[i]*3)
  }
  return resArr;
};

module.exports = map_to_three_multiples;
