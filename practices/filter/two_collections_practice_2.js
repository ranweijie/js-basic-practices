'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
    var noCommonEleArr = [],
        tmpItem,
        lenA = collection_a.length,
        lenB = collection_b.length,
        len = lenA >= lenB ? lenA : lenB,
        longArr = lenA >= lenB ? collection_a : collection_b,
        shortArr = lenA >= lenB ? collection_b : collection_a;
    for(var i = 0 ; i < len ; i++ ){
        tmpItem = longArr[i];
        if(shortArr.indexOf(tmpItem) == -1){
            noCommonEleArr.push(tmpItem)
        }
    }
    return noCommonEleArr;
}

module.exports = choose_no_common_elements;
