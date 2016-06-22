'use strict';

function choose_even(collection) {

  //在这里写入代码
  var evenArr = [],
      len = collection.length;
  for (var i = 0; i < len; i++){
    if (collection[i] % 2 == 0){
      evenArr.push(collection[i])
    }
  }
  return evenArr;
}

module.exports = choose_even;
