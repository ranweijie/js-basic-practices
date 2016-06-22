'use strict';

function compute_average(collection) {
  //在这里写入代码
  var averageRes,
      total = 0,
      len = collection.length;
  for(var i = 0; i < len; i++){
      total += collection[i];
  }
  averageRes = total/len;
  return averageRes;
}

module.exports = compute_average;

