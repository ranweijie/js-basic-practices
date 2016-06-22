'use strict';
function map_to_even(collection){
  // return [2,4,6,8,10];
  var resArr = [];
  for(var i in collection){
    resArr.push(collection[i]*2)
  }
  return resArr;
}
module.exports = map_to_even;
