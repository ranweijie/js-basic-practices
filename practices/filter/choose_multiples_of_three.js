'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
    var threeArr = [],
        len = collection.length;
    for (var i = 0; i < len; i++){
        var divisor = collection[i]/3;
        if (parseInt(divisor) == divisor){
            threeArr.push(collection[i])
        }
    }
    return threeArr;
}

module.exports = choose_multiples_of_three;
