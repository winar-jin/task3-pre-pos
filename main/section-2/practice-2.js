'use strict';

module.exports = function countSameElements(collection) {
  if(!collection || !Array.isArray(collection)){
    return;
  }
  let result = [];
  collection.forEach(item => {
    let regularRes = /(\w+)-(\d)/g.exec(item);
    if(regularRes && result.some(value => value.key === regularRes[1]) || result.some(value => value.key === item)){
      regularRes ?
        result.find(value => value.key === regularRes[1]).count += parseInt(regularRes[2],10) :
        ++result.find(value => value.key === item).count;
    } else {
      regularRes ?
        result.push({key: regularRes[1],count: parseInt(regularRes[2],10)}) :
        result.push({key:item,count:1});
    }
  });
  return result;
}
