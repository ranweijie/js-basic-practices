'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var total = 0;
  for(var i in collection){
    total += collection[i];
  }
  return total;
}

module.exports = calculate_elements_sum;

