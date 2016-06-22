'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var resArr = [],
      tmpItem = number,
      stepNum = interval;
  resArr.push(tmpItem);

  tmpItem = tmpItem - stepNum;
  while(tmpItem >= 0){
    resArr.push(tmpItem);
    tmpItem = tmpItem - stepNum;
  }

  if(tmpItem > 0){
    resArr.push(tmpItem - stepNum);
  }

  return resArr;
}

module.exports = spilt_to_zero;
