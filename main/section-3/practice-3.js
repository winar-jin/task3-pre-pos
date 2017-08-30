'use strict';
const countSameElements = require('../../main/section-2/practice-2');

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if (!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0) {
    return;
  }
  const valueArr = countSameElements(collectionA);
  let result = JSON.parse(JSON.stringify(valueArr));
  result.forEach(item => {
    if (objectB.value.includes(item.key)) {
      item.count -= Math.floor(item.count / 3);
    }
  });
  return result;
};