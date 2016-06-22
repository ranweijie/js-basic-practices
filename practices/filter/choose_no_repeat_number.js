'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
    var noRepeatArr = [],
        item,
        len = collection.length;
    for (var i = 0; i < len; i++){
        item = collection[i];
        var position = noRepeatArr.indexOf(item)
        if (position == -1){
            noRepeatArr.push(collection[i])
        }
    }
    return noRepeatArr;
}

module.exports = choose_no_repeat_number;
