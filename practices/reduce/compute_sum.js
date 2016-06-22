'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var total = 0;
  for(var i = 0,len = collection.length; i < len; i++){
    total += collection[i];
  }
  return total;
}

module.exports = calculate_elements_sum;

