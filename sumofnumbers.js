

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i <= list.length) {
    sum += i;
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (prev, next) {
    return prev + next;
  });
}

const myList = [1, 2, 3, 4, 5];
console.log(sumFor(myList));
console.log(sumWhile(myList));
console.log(sumRecursion(myList));
console.log(sumTheSimpleWay(myList));
