'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
    return;
  }
  let result = JSON.parse(JSON.stringify(collectionA));
  result.forEach(item => {
    if(objectB.value.includes(item.key)){
      --item.count;
    }
  });
  return result;
}
