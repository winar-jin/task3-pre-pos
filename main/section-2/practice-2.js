'use strict';

// module.exports = function countSameElements(collection) {
// if (!collection || !Array.isArray(collection)) {
//   return;
// }
//   let result = [];
//   collection.forEach(item => {
//     let regularRes = /^(\w+)-(\d+)$/g.exec(item);
//     if (regularRes && result.some(value => value.key === regularRes[1]) || result.some(value => value.key === item)) {
//       regularRes ?
//         result.find(value => value.key === regularRes[1]).count += parseInt(regularRes[2], 10) :
//         ++result.find(value => value.key === item).count;
//     } else {
//       regularRes ?
//         result.push({key: regularRes[1], count: parseInt(regularRes[2], 10)}) :
//         result.push({key: item, count: 1});
//     }
//   });
//   return result;
// };

function pushs(collection, item) {
  let regularRes = /^(\w+)-(\d+)$/g.exec(item);
  summrize(collection, regularRes[1], regularRes[2]);
}

function summrize(collection, item, number) {
  if (collection.some(ele => ele.key === item)) {
    collection.find(ele => ele.key === item).count += parseInt(number,10);
  } else {
    collection.push({
      key: item,
      count: parseInt(number,10)
    });
  }
}

module.exports = function countSameElements(collection) {
  if (!collection || !Array.isArray(collection)) {
    return;
  }
  let result = [];
  collection.forEach(item => {
    if (item.length === 1) {
      summrize(result, item, 1);
    } else {
      pushs(result, item);
    }
  });
  return result;
};
