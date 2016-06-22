'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var isSame = false,
      mpItem,
      lenA = collection_a.length,
      lenB = collection_b.length;
  if(lenA != lenB){
    return isSame
  }
  for(var i = 0; i < lenA; i++){
    if(collection_a[i] != collection_b[i]){
      return isSame
    }
  }
  isSame = true;
  return isSame;
}

module.exports = compare_collections;


