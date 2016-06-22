'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
    var divisibleIntegerEleArr = [],
        tmpItem,
        lenA = collection_a.length,
        lenB = collection_b.length;

    for(var i = 0 ; i < lenA ; i++ ){
        tmpItem = collection_a[i];
        for(var j = 0 ; j < lenB ; j++ ){
            if(tmpItem % collection_b[j] == 0){
                if (divisibleIntegerEleArr.indexOf(tmpItem) ==-1){
                  divisibleIntegerEleArr.push(tmpItem);
                }
                // break;
            }
        }
    }
    return divisibleIntegerEleArr;
}

module.exports = choose_divisible_integer;
