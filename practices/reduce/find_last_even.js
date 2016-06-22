'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var lastEvenEle = 0;
  for (var i in collection){
    if(collection[i] % 2 == 0){
      lastEvenEle = collection[i];
    }
  }
  return lastEvenEle;
}

module.exports = find_last_even;
