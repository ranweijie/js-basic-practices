'use strict';
var number_map_to_word_over_26 = function(collection){
  // return ['a','m','aa','ad','y','aa'];
  var wordStr = "abcdefghijklmnopqrstuvwxyz",
    tmpItem = "",
    resArr = [];
  for (var i in collection){

    if(collection[i] <= 26){
      tmpItem = wordStr.charAt(i);
      resArr.push(tmpItem);
    }

    if(collection[i] > 26){
      var shang = parseInt(collection[i]/26);
      var yushu = collection[i] % 26;
      tmpItem = "";
      for(var i = 1 ; i <= shang; i++){
        tmpItem += "a";
      }
      tmpItem += wordStr.charAt(yushu-1);
      resArr.push(tmpItem);
    }
  }
  return resArr;
};

module.exports = number_map_to_word_over_26;
