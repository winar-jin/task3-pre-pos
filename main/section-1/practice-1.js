'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  if(!collectionA || !collectionB || !Array.isArray(collectionA) || !Array.isArray(collectionB)){
    return;
  }
  let result = [];
  collectionA.forEach(item => {
    if(collectionB.includes(item)){
      result.push(item);
    }
  });
  return result;
}
