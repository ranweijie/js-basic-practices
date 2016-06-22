'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var initArr = collection.split("->"),
      numArr = [],
      sortedNumArr = [],
      medianNum,
      len = initArr.length;
  for(var i = 0 ; i < len ; i++){
      numArr.push(Number(initArr[i]))
  }
  sortedNumArr = numArr.sort(function (a,b) {return a-b});
  console.log(sortedNumArr);
  if(len % 2 != 0){
    medianNum = sortedNumArr[(len-1)/2];
    return medianNum;
  }else{
    medianNum = (sortedNumArr[len/2] + sortedNumArr[len/2 -1])/2;
    return medianNum;
  }
}

module.exports = compute_chain_median;
