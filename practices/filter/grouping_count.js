'use strict';

function grouping_count(collection) {

  //在这里写入代码
    var noRepeatItemArr = [],
        groupingCountRes = {},
        tmpItem = "",
        tmpCount = 0;

    for (var i = 0 , len = collection.length ; i < len ; i++ ){
        tmpItem = collection[i];
        if (noRepeatItemArr.indexOf(tmpItem) == -1) {
            noRepeatItemArr.push(tmpItem)
            tmpCount = 1
            // groupingCountRes = {}
            for (var j = i+1; j < len; j++) {
                if (collection[j] == tmpItem) {
                    tmpCount++;
                };
            }
            groupingCountRes[tmpItem] = tmpCount;
        }
    }
    return groupingCountRes;
}

module.exports = grouping_count;
