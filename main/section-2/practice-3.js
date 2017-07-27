'use strict';

module.exports = function countSameElements(collection) {
  if(!collection || !Array.isArray(collection)){
    return;
  }
  let result = [];
  collection.forEach(item => {
    let regularRes = /(\w+)[-|[|:](\d+)]?/g.exec(item);
    if(regularRes && result.some(value => value.name === regularRes[1]) || result.some(value => value.name === item)){
      regularRes ?
        result.find(value => value.name === regularRes[1]).summary += parseInt(regularRes[2],10) :
        ++result.find(value => value.name === item).summary;
    } else {
      regularRes ?
        result.push({name: regularRes[1],summary: parseInt(regularRes[2],10)}) :
        result.push({name:item,summary:1});
    }
  });
  return result;
}
