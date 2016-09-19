/*
 * Created by Justin Chock on 9/18/2016.
 */

const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (let number of list) {
    sum += number;
  }
  return sum;
}
console.log(sumFor(testList));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testList));

function sumRecursive(list) {
  if (list.length === 0) return 0;
  return list[0] + sumRecursive(list.slice(1, list.length));
}
console.log(sumRecursive(testList, 0));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num}, 0);
}
console.log(sumTheSimpleWay(testList));
