'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  var wordStr = "abcdefghijklmnopqrstuvwxyz",
      tmpItem = "",
      resArr = [];
  for (var i in collection){
    tmpItem = wordStr.charAt(i);
    resArr.push(tmpItem);
  }
  return resArr;
};

module.exports = number_map_to_word;
