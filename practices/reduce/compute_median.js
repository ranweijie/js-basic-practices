'use strict';

function compute_median(collection) {
  //在这里写入代码
  var sortedNumArr = collection.sort(function (a,b) {return a-b}),
      medianNum,
      len = sortedNumArr.length;

  // console.log(sortedNumArr);
  if(len % 2 != 0){
    medianNum = sortedNumArr[(len-1)/2];
    return medianNum;
  }else{
    medianNum = (sortedNumArr[len/2] + sortedNumArr[len/2 -1])/2;
    return medianNum;
  }
}

module.exports = compute_median;


