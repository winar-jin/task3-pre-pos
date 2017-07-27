'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
    return;
  }
  const valueArr = objectB.value;
  let result = [];
  collectionA.forEach(item => {
    if(valueArr.includes(item)){
      result.push(item);
    }
  })
  return result;
}
