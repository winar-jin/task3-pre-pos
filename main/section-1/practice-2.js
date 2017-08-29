'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  if (!collectionA || !collectionB || !Array.isArray(collectionA) || !Array.isArray(collectionB)) {
    return;
  }
  const valueArr = collectionB[0];
  let result = [];
  collectionA.forEach(item => {
    if (valueArr.includes(item)) {
      result.push(item);
    }
  });
  return result;
};
