'use strict';

// module.exports = function countSameElements(collection) {
//   if (!collection || !Array.isArray(collection)) {
//     return;
//   }
//   let result = [];
//   collection.forEach(item => {
//     let regularRes = /(\w+)[-|[|:](\d+)]?/g.exec(item);
//     if (regularRes && result.some(value => value.name === regularRes[1]) || result.some(value => value.name === item)) {
//       regularRes ?
//         result.find(value => value.name === regularRes[1]).summary += parseInt(regularRes[2], 10) :
//         ++result.find(value => value.name === item).summary;
//     } else {
//       regularRes ?
//         result.push({name: regularRes[1], summary: parseInt(regularRes[2], 10)}) :
//         result.push({name: item, summary: 1});
//     }
//   });
//   return result;
// };

function pushs(collection, item) {
  let regularRes = /(\w+)[-|[|:](\d+)]?/g.exec(item);
  summrize(collection, regularRes[1], regularRes[2]);
}

function summrize(collection, item, number) {
  if (collection.some(ele => ele.name === item)) {
    collection.find(ele => ele.name === item).summary += parseInt(number,10);
  } else {
    collection.push({
      name: item,
      summary: parseInt(number,10)
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
