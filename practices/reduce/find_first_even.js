'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var firstEvenEle = 0;
  for (var i in collection){
    if(collection[i] % 2 == 0){
      firstEvenEle = collection[i];
      return firstEvenEle;
    }
  }

}

module.exports = find_first_even;

