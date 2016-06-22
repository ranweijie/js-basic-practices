'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var reverseArr = collection.reverse();
  // console.log(reverseArr)
  var len = collection.length;
  var reverseIndex = reverseArr.indexOf(element);
  var forwardLastIndex = len-1-reverseIndex;
  return forwardLastIndex;
}

module.exports = calculate_elements_sum;
